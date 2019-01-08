import { expectLitToBeMustache, renderLitInto, renderLitInnerHtml } from '../../test/expectHelper'

describe('data bindings', () => {
  it('no bindings at all', () => {
    expectLitToBeMustache('Hello world', {})
  })

  it('simple string data binding', () => {
    expectLitToBeMustache('Hello {{name}}!', { name: 'Underworld' })
  })

  it('nested data binding', () => {
    const data = { who: {
        prefix: 'Mr.',
        name: 'Underworld',
      } }
    expectLitToBeMustache('Hello {{who.prefix}} {{who.name}}!', data)
  })

  it('attribute data binding', () => {
    const template = '<div some-attri="{{someValue}}"></div>'
    const data = { someValue: 'some-value' }
    expect(renderLitInto(template, data).querySelector('[some-attri="some-value"]')).not.toBe(null)
  })

  it('string as data / {{.}}', () => {
    expect(renderLitInnerHtml('hi {{.}}', 'u')).toBe('hi u')
  })
})