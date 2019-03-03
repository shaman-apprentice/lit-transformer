import { data2Value } from '../helper/dataHelper'

export default (remainingTmplStr, { delimiter }) => {
  const indexOfEndDelimiter = remainingTmplStr.indexOf(delimiter.end)
  const dataKey = remainingTmplStr.substring(0, indexOfEndDelimiter)
  return {
    remainingTmplStr: remainingTmplStr.substring(indexOfEndDelimiter + delimiter.end.length),
    staticParts: [ ],
    insertionPoints: [ ctx => data2Value(ctx, dataKey) ]
  }
}