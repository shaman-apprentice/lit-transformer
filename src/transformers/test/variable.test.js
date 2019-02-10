import { expectTemplatesInnerHTML, renderLitInto, renderLitInnerHtml } from '../../../test/expectHelper'

describe('variable', () => {
  it('no bindings at all', () => {
    expectTemplatesInnerHTML('Hello world', {})
  })

  it('simple string data binding', () => {
    expectTemplatesInnerHTML('Hello {{name}}!', { name: 'Underworld' })
  })

  it('nested data binding', () => {
    const data = { who: {
        prefix: 'Mr.',
        name: 'Underworld',
      } }
    expectTemplatesInnerHTML('Hello {{who.prefix}} {{who.name}}!', data)
  })

  it('attribute data binding', () => {
    const template = '<div some-attri="{{someValue}}"></div>'
    const data = { someValue: 'some-value' }
    expect(renderLitInto(template, data).querySelector('[some-attri="some-value"]')).not.toBe(null)
  })

  it('string as data / {{.}}', () => {
    expect(renderLitInnerHtml('hi {{.}}', 'u')).toBe('hi u')
  })

  it('html in data binding with triple {{{', () => {
    expectTemplatesInnerHTML('{{{someHtml}}}', { someHtml: '<p>I am a smart paragraph</p>' })
  })

  it('html in data binding with double {{', () => {
    expect(renderLitInnerHtml('{{someHtml}}', { someHtml: '<p>I am a smart paragraph</p>' }))
      .toBe('&lt;p&gt;I am a smart paragraph&lt;/p&gt;') // mustache does encode '/' as '&#x2F;' but I guess this difference is fine
  })
})