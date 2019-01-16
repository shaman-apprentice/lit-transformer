import { data2Value } from './dataHelper'
import { transform } from '../index'

// todo test for start not greedy
// todo manual string parsing faster then RegEx?

/** Note, unlike within mustache functions as data values are not supported for the time being */
export default () => ({
  delimiter: {
    start: /{{#(.+?)}}/,
    createEnd: startMatch => new RegExp(`{{\/${startMatch[1]}}}`), // "?" makes it lazy / not a greedy match
  },
  transform: ({ config, innerTemplate, startMatch }) => {
    const dataKey = startMatch[1]

    return data => {
      const dataValue = data2Value(data, dataKey)

      if (isMustacheFalsy(dataValue))
        return ``;

      // todo add memorization for parsedInnerTemplate
      const parsedInnerTemplate = transform(innerTemplate, config)
      return renderArray(dataValue, parsedInnerTemplate)
    }
  }
})

function renderArray(arrayData, parsedInnerTemplate) {
  return arrayData.map(d => parsedInnerTemplate(d))
}

function isMustacheFalsy(value) {
  return [null, undefined, false, 0, NaN, ''].some(falsy => falsy === value) || (value.length && value.length === 0)
}