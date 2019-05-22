import { ctx2MustacheString } from '../helper/dataHelper.js'

export default (remainingTmplStr, { delimiter }) => {
  const indexOfEndDelimiter = remainingTmplStr.indexOf(delimiter.end)
  const dataKey = remainingTmplStr.substring(0, indexOfEndDelimiter)
  return {
    remainingTmplStr: remainingTmplStr.substring(indexOfEndDelimiter + delimiter.end.length),
    insertionPoint: ctx => ctx2MustacheString(ctx, dataKey)
  }
}