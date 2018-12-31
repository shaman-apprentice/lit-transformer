const config = {
  html: undefined,
  delimiters: { start: '{{', end: '}}' },
}

export default ({ parse, config})

function parse(template) {
  const parsedTemplate = parseTemplate(template, config.delimiters)
  return data => config.html(parsedTemplate.staticParts, data2Bindings(data))

  function data2Bindings(data) {
    return parsedTemplate.dataBindingKeys.map(key => data[key]) // todo nested keys
  }
}

function parseTemplate(tmp) {
  const delimiStartLen = config.delimiters.start.length
  const delimiEndLen = config.delimiters.end.length

  const staticParts = []
  const dataBindingKeys = []

  let startIOfCurrDataBinding = tmp.indexOf(config.delimiters.start)
  while (startIOfCurrDataBinding >= 0) {
    staticParts.push(tmp.substring(0, startIOfCurrDataBinding))

    const endIOfCurrDataBinding = tmp.indexOf(config.delimiters.end)
    dataBindingKeys.push(tmp.substring(startIOfCurrDataBinding + delimiStartLen, endIOfCurrDataBinding))

    tmp = tmp.substring(endIOfCurrDataBinding + delimiEndLen)
    startIOfCurrDataBinding = tmp.indexOf(config.delimiters.start)
  }

  staticParts.push(tmp)

  return { staticParts, dataBindingKeys }
}