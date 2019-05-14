import { transform } from '../lit-transformer.js'
import { ctx2Value } from '../helper/dataHelper.js'
import { isMustacheFalsy } from '../helper/isMustacheFalsy.js'
import { parseSection } from '../helper/sectionHelper.js'

/** Note, unlike within mustache functions as data values are not supported out of the box */
export default () => ({
  test: remainingTmplStr => remainingTmplStr[0] === '#',
  transform: (remainingTmplStr, config) => {
    const parsedSection = parseSection(remainingTmplStr, config.delimiter)
    const transformedInnerTmpl = transform(parsedSection.innerTmpl, config)
    
    return {
      remainingTmplStr: parsedSection.remainingTmplStr,
      insertionPoint: ctx => {
        const sectionData = ctx2Value(ctx, parsedSection.dataKey)
        
        if (isMustacheFalsy(sectionData))
          return '';

        return sectionData.map
          ? sectionData.map(innerCtx => transformedInnerTmpl(innerCtx))
          : transformedInnerTmpl(ctx)
      }
    }
  }
})