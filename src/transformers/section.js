import { ctx2Value } from '../helper/dataHelper'
import { isMustacheFalsy } from '../helper/isMustacheFalsy'
import { transform } from '../lit-transformer'

/** Note, unlike within mustache functions as data values are not supported for the time being */
export default () => ({
  test: remainingTmplStr => remainingTmplStr[0] === '#',
  transform: (remainingTmplStr, config) => {
    const indexOfStartTagEnd = remainingTmplStr.indexOf(config.delimiter.end)
    const dataKey = remainingTmplStr.substring(1, indexOfStartTagEnd)
    const endTag = config.delimiter.start + '/' + dataKey + config.delimiter.end
    const indexOfEndTagStart = remainingTmplStr.indexOf(endTag)
    const innerTmpl = remainingTmplStr.substring(indexOfStartTagEnd + config.delimiter.start.length, indexOfEndTagStart)
    const transformedInnerTmpl = transform(innerTmpl, config)

    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTagStart + endTag.length),
      insertionPoint: ctx => {
        const sectionData = ctx2Value(ctx, dataKey)
        
        if (isMustacheFalsy(sectionData))
          return '';

        return sectionData.map(innerCtx => transformedInnerTmpl(innerCtx))
      }
    }
  }
})