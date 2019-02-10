import createTransform from './lit-transformer'
import variableTransformer from './transformers/variable'
import unsafeVariableTransformer from './transformers/unsafeVariable'
import sectionTransformer from './transformers/section'
import invertedSectionTransformer from './transformers/invertedSection'
import commentTransformer from './transformers/comment'
import customDelimiter from './transformers/customDelimiter'

export default (html, unsafeHTML) =>
  createTransform({
    html,
    transformers: {
      variable: variableTransformer(),
      unsafeVariable: unsafeVariableTransformer(unsafeHTML),
      section: sectionTransformer(),
      invertedSection: invertedSectionTransformer(),
      comment: commentTransformer(),
      customDelimiter: customDelimiter(),
    },
  })