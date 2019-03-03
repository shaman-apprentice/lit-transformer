import createTransform from './lit-transformer'
import transformVariable from './transformers/transformVariable'
import unsafeVariableTransformer from './transformers/unsafeVariable'
import sectionTransformer from './transformers/section'
import invertedSectionTransformer from './transformers/invertedSection'
import commentTransformer from './transformers/comment'
import customDelimiterTransformer from './transformers/customDelimiter'

export default (html, unsafeHTML) =>
  createTransform({
    html,
    delimiter: { start: '{{', end: '}}' },
    transformVariable,
    transformers: {
      unsafeVariable: unsafeVariableTransformer(unsafeHTML),
      section: sectionTransformer(),
      invertedSection: invertedSectionTransformer(),
      comment: commentTransformer(),
      customDelimiterTransformer: customDelimiterTransformer(),
    },
  })