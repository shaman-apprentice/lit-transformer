import createTransform from './lit-transformer.js'
import transformVariable from './transformers/transformVariable.js'
import unsafeVariableTransformer from './transformers/unsafeVariable.js'
import sectionTransformer from './transformers/section.js'
import invertedSectionTransformer from './transformers/invertedSection.js'
import commentTransformer from './transformers/comment.js'
import customDelimiterTransformer from './transformers/customDelimiter.js'

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