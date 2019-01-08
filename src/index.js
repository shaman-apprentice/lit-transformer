import parseDataBinding from './dataBindingParser'
import parseDataWithHtml from './withHtmlDataBindingParser'
import parseSection from './sectionParser'

const defaultConfig = {
  html: undefined,
  delimiters: [
    { parse: parseSection, start: /{{#(.+?)}}/, createEnd: startMatch => new RegExp(`{{\/${startMatch[1]}}}`) }, // "?" makes it lazy / not a greedy match
    { parse: parseDataWithHtml, start: /{{{/, end: /}}}/ },
    { parse: parseDataBinding, start: /{{/, end: /}}/ },
  ],
  directives: {},
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
  const candis = delimiters.map( d => ({ delimiter: d, startMatch: d.start.exec(template) }))
    .filter(c => c.startMatch)
    .sort(compareDPCandis)

  if (candis.length === 0)
    return undefined

  const fstMatch = candis[0]
  return {
    startMatch: fstMatch.startMatch,
    endMatch: (fstMatch.delimiter.createEnd
      ? fstMatch.delimiter.createEnd(fstMatch.startMatch)
      : fstMatch.delimiter.end).exec(template),
    parse: fstMatch.delimiter.parse,
  }
}

export function compareDPCandis(c1, c2) {
  if (c1.startMatch.index === c2.startMatch.index)
    return c2.startMatch[0].length - c1.startMatch[0].length

  return c1.startMatch.index < c2.startMatch.index ? -1 : 1
}