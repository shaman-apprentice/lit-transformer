import Mustache from 'mustache'

import { expectTemplatesInnerHTML, renderLitInnerHtml } from '../../../test/expectHelper'

test('falsy inverted section with undefined', () => {
  const template = 'Hello {{^who}}not for real{{/who}}!'
  const data = { who: undefined }
  expectTemplatesInnerHTML(template, data)
})

test('truthy inverted section', () => {
  const template = 'Hello {{^who}}for real{{/who}}!'
  const data = { who: ['Dr.', ' Who'] }
  expectTemplatesInnerHTML(template, data)
})

test('inverted section without end tag', () => {
  const template = '{{^who}no one{{/nobody}}'
  const data = { list: [ {x:1}, {x:2} ] }
  expect(() => Mustache.render(template, data)).toThrow()
  expect(() => renderLitInnerHtml(template, data)).toThrow('missing end delimiter at: \'{{^who}no one{{/nobody}}\'')
})
