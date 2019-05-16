import Mustache from 'mustache'

import { expectTemplatesInnerHTML, renderLitInnerHtml } from '../../../test/expectHelper'

test('falsy section with undefined', () => {
  const template = 'Hello {{#who}}Dr. Who{{/who}}!'
  const data = { who: undefined }
  expectTemplatesInnerHTML(template, data)
})

test('section with list of strings', () => {
  const template = 'Hello {{#who}}{{.}}{{/who}}!'
  const data = { who: ['Dr.', ' Who'] }
  expectTemplatesInnerHTML(template, data)
})

test('section with list of data without html in section template', () => {
  const template = '<ul>{{#persons}}{{person}}{{/persons}}</ul>'
  const data = { persons: [ { person: 'Mr. first' }, { person: 'Mr. second' } ] }
  expectTemplatesInnerHTML(template, data)
})

test('section with list of data with html in section template', () => {
  const template = '<ul>{{#persons}}<li>{{person}}</li>{{/persons}}</ul>'
  const data = { persons: [ { person: 'Mr. first' }, { person: 'Mr. second' } ] }
  expectTemplatesInnerHTML(template, data)
})

test('data binding in list with null pointer exception', () => {
  const data = { list: [ {x:1}, {x:2} ] }
  expectTemplatesInnerHTML('{{#list}}{{x.y}}{{/list}}', data)
})

test('data binding with null pointer exception in key', () => {
  expectTemplatesInnerHTML('{{#a.b}}BUH{{/a.b}}', {})
})

test('section without end tag', () => {
  const template = '{{#list}}{{x}}{{/lst}}'
  const data = { list: [ {x:1}, {x:2} ] }
  expect(() => Mustache.render(template, data)).toThrow()
  expect(() => renderLitInnerHtml(template, data)).toThrow('missing end delimiter at: \'{{#list}}{{x}}{{/lst}}\'')
})

test('section with non-falsy data, which provides no map as guard', () => {
  const template = '{{#a.b}}{{a.b}}{{/a.b}}'
  const data = { a: { b: 1 } }
  expectTemplatesInnerHTML(template, data)
})