import { ctx2Value } from '../helper/dataHelper'
import { isMustacheFalsy } from '../helper/isMustacheFalsy'

export default () => ({
  test: remainingTmplStr => remainingTmplStr[0] === '^',
  transform: (remainingTmplStr, { delimiter }) => {
    const indexOfStartTagEnd = remainingTmplStr.indexOf(delimiter.end)
    const dataKey = remainingTmplStr.substring(1, indexOfStartTagEnd)
    const endTag = delimiter.start + '/' + dataKey + delimiter.end
    const indexOfEndTagStart = remainingTmplStr.indexOf(endTag)
    const innerStr = remainingTmplStr.substring(indexOfStartTagEnd + delimiter.start.length, indexOfEndTagStart)

    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTagStart + endTag.length),
      insertionPoint: ctx => {
        const dataValue = ctx2Value(ctx, dataKey)

        return isMustacheFalsy(dataValue)
          ? innerStr
          : ''
      },
    }
  }
})