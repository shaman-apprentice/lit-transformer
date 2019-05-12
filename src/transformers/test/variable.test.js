import { expectTemplatesInnerHTML, renderLitInto, renderLitInnerHtml } from '../../../test/expectHelper'

test('no bindings at all', () => {
  expectTemplatesInnerHTML('Hello world', {})
})

test('simple string data binding', () => {
  expectTemplatesInnerHTML('Hello {{name}}!', { name: 'Underworld' })
})

test('nested data binding', () => {
  const data = { who: {
      prefix: 'Mr.',
      name: 'Underworld',
    } }
  expectTemplatesInnerHTML('Hello {{who.prefix}} {{who.name}}!', data)
})

test('attribute data binding', () => {
  const template = '<div some-attri="{{someValue}}"></div>'
  const data = { someValue: 'some-value' }
  expect(renderLitInto(template, data).querySelector('[some-attri="some-value"]')).not.toBe(null)
})

test('string as data / {{.}}', () => {
  expect(renderLitInnerHtml('hi {{.}}', 'u')).toBe('hi u')
})

test('html in data binding with double {{', () => {
  expect(renderLitInnerHtml('{{someHtml}}', { someHtml: '<p>I am a smart paragraph</p>' }))
    .toBe('&lt;p&gt;I am a smart paragraph&lt;/p&gt;') // mustache does encode '/' as '&#x2F;' but I guess this difference is fine
})

test('data binding with none existing key', () => {
  expectTemplatesInnerHTML('hi {{who}}', {})
})

test('data binding with null pointer exception', () => {
  expectTemplatesInnerHTML('hi {{a.b}}', {})
})

test('false as value', () => {
  expectTemplatesInnerHTML('hi {{who}}', { who: false })
})
