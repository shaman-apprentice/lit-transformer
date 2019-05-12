import { ctx2Value } from '../helper/dataHelper.js'
import { isMustacheFalsy } from '../helper/isMustacheFalsy.js'
import { parseSection } from '../helper/sectionHelper.js'

export default () => ({
  test: remainingTmplStr => remainingTmplStr[0] === '^',
  transform: (remainingTmplStr, { delimiter }) => {
    const parsedSection = parseSection(remainingTmplStr, delimiter)

    return {
      remainingTmplStr: parsedSection.remainingTmplStr,
      insertionPoint: ctx =>
        isMustacheFalsy(ctx2Value(ctx, parsedSection.dataKey))
          ? parsedSection.innerTmpl
          : '',
    }
  }
})