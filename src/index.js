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
  const parsedTemplate = parseTemplate(template, config.delimiters)
  return data => config.html(parsedTemplate.staticParts, data2Bindings(data))

  function data2Bindings(data) {
    return parsedTemplate.dataBindingKeys.map(key => data[key]) // todo nested keys
  }
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