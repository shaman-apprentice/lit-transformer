const defaultConfig = {
  html: undefined,
  delimiters: { start: '{{', end: '}}' },
}

/**
 * @param {function} html html-function used for template creation
 * @param {Object} [config] partial config, which overwrites related default config */
export default (html, config = {}) => {
  const litTemplateTransformer = {
    config: {
      ...defaultConfig,
      ...config,
      html: html,
    },
    parse: template => parse(litTemplateTransformer.config, template),
  }

  return litTemplateTransformer
}

function parse(config, template) {
  const { staticParts, dataBindingKeys } = parseTemplate(template, config.delimiters)
  return data =>
    config.html(staticParts, ...data2Bindings(data, dataBindingKeys))
}

function parseTemplate(tmp, delimiters) {
  const delimiStartLen = delimiters.start.length
  const delimiEndLen = delimiters.end.length

  const staticParts = []
  const dataBindingKeys = []

  let startIOfCurrDataBinding = tmp.indexOf(delimiters.start)
  while (startIOfCurrDataBinding >= 0) {
    staticParts.push(tmp.substring(0, startIOfCurrDataBinding))

    const endIOfCurrDataBinding = tmp.indexOf(delimiters.end)
    dataBindingKeys.push(tmp.substring(startIOfCurrDataBinding + delimiStartLen, endIOfCurrDataBinding))

    tmp = tmp.substring(endIOfCurrDataBinding + delimiEndLen)
    startIOfCurrDataBinding = tmp.indexOf(delimiters.start)
  }

  staticParts.push(tmp)

  return { staticParts, dataBindingKeys }
}

export function data2Bindings(data, dataBindingKeys) {
  return dataBindingKeys.map(key => key2Value(data, key))
}

function key2Value(data, key) {
  return key.split('.').reduce((acc, value) => acc[value], data)
}