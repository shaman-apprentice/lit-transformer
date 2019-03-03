import { data2Value } from '../helper/dataHelper'

/**
 * Note, this is unsafe to use cause the rendered output could be any JavaScript .
 */
export default unsafeHTML => ({
  test: (remainingTmplStr, { delimiter }) =>
    remainingTmplStr[0] === '{' && remainingTmplStr.indexOf('}' + delimiter.end) >= 0,
  transform: (remainingTmplStr, { delimiter }) => {
    const indexOfEndDelimiter = remainingTmplStr.indexOf('}' + delimiter.end)
    const dataKey = remainingTmplStr.substring(1, indexOfEndDelimiter)
    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndDelimiter + 1 + delimiter.end.length),
      staticParts: [ ],
      insertionPoints: [ ctx => unsafeHTML(data2Value(ctx, dataKey)) ]
    }
  }
})