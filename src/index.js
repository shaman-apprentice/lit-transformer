import { html } from '../node_modules/lit-html/lit-html.js'

export default function (template, delimiters = { start: '{{', end: '}}' }) {
  const parsedTemplate = parseTemplate(template, delimiters)

  return data => html([...parsedTemplate.staticParts], data2Bindings(data))

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