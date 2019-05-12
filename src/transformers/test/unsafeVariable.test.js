import Mustache from 'mustache'

import { expectTemplatesInnerHTML, renderLitInto, renderLitInnerHtml } from '../../../test/expectHelper'

test('html in data binding with triple {{{', () => {
  expectTemplatesInnerHTML('{{{someHtml}}}', { someHtml: '<p>I am a smart paragraph</p>' })
})

test('missing end tag', () => {
  const template = '{{{someHtml}}'
  const data = { someHtml: '<p>I am a smart paragraph</p>'}
  expect(() => Mustache.render(template, data)).toThrow()
  expect(() => renderLitInnerHtml(template, data)).toThrow('missing end delimiter at: \'{{{someHtml}}\'')
})