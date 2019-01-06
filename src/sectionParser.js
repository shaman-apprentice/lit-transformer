import { data2Value } from './dataHelper'
import { parse } from './index'

export default function({ config, innerTemplate, startMatch }) {
  const dataKey = startMatch[1]

  return data => {
    const dataValue = data2Value(data, dataKey)

    if (isMustacheFalsy(dataValue))
      return ``;

    const parsedInnerTemplate = parse(innerTemplate, config)
    return dataValue.map( d => parsedInnerTemplate(d))
  }
}


function isMustacheFalsy(value) {
  return [null, undefined, false, 0, NaN, ''].some(falsy => falsy === value) || (value.length && value.length === 0)
}