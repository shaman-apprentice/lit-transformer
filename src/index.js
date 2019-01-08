import parseDataBinding from './dataBindingParser'
import parseSection from './sectionParser'

// todo order appearance of templates

const defaultConfig = {
  html: undefined,
  delimiters: [
    { parse: parseSection, start: /{{#(.+?)}}/, createEnd: startMatch => new RegExp(`{{\/${startMatch[1]}}}`) }, // "?" makes it lazy / not a greedy match
    { parse: parseDataBinding, start: /{{/, end: /}}/ },
  ],
}

/**
 * @param {function} html - a tagged html function used for template creation
 * @param {Object} [config] - partial config, which overwrites related default config */
export default (html, config = {}) => {
  const litTemplateTransformer = {
    config: {
      ...defaultConfig,
      ...config,
      html: html,
    },
    parse: template => parse(template, litTemplateTransformer.config),
  }

  return litTemplateTransformer
}

export function parse(template, config) {
  const staticParts = [];
  const dynamicParts = [];

  let str2Parse = template;
  let dP = getDynamicPart(str2Parse, config.delimiters)
  while (dP) {
    staticParts.push(str2Parse.substring(0, dP.startMatch.index))

    dynamicParts.push(dP.parse({
      config,
      innerTemplate: str2Parse.substring(dP.startMatch.index + dP.startMatch[0].length, dP.endMatch.index),
      startMatch: dP.startMatch,
      endMatch: dP.endMatch,
    }))

    str2Parse = str2Parse.substring(dP.endMatch.index + dP.endMatch[0].length)

    dP = getDynamicPart(str2Parse, config.delimiters)
  }

  staticParts.push(str2Parse)

  return data =>
    config.html(staticParts, ...dynamicParts.map(dynamicPart => dynamicPart(data)))
}

function getDynamicPart(template, delimiters) {
  for (let delimiter of delimiters) {
    const startMatch = delimiter.start.exec(template)
    if (startMatch)
      return {
        startMatch,
        endMatch: (delimiter.createEnd ? delimiter.createEnd(startMatch) : delimiter.end).exec(template),
        parse: delimiter.parse,
      }
  }

  return undefined
}