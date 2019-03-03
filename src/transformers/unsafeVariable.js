import { ctx2Value } from '../helper/dataHelper.js'

/** Note, this is unsafe to use, because the rendered output could be any JavaScript! */
export default unsafeHTML => ({
  test: remainingTmplStr => remainingTmplStr[0] === '{',
  transform: (remainingTmplStr, { delimiter }) => {
    const indexOfEndDelimiter = remainingTmplStr.indexOf('}' + delimiter.end)
    const dataKey = remainingTmplStr.substring(1, indexOfEndDelimiter)
    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndDelimiter + 1 + delimiter.end.length),
      insertionPoint: ctx => unsafeHTML(ctx2Value(ctx, dataKey)),
    }
  }
})