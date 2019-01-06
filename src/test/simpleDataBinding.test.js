import { html, render } from 'lit-html'
import Mustache from 'mustache'

import createLitTemplateTransformer from '../index'

const parse = createLitTemplateTransformer(html).parse

describe('data bindings', () => {
  it('no bindings at all', () => {
    const template = 'Hello world'
    expect(stripLitExpressionMarkers(renderLit(template).innerHTML)).toBe(renderMustache(template).innerHTML)
  })

  it('simple string data binding', () => {
    const template = 'Hello {{name}}!'
    const data = { name: 'Underworld' }
    expect(stripLitExpressionMarkers(renderLit(template, data).innerHTML)).toBe(renderMustache(template, data).innerHTML)
  })

  it('nested data binding', () => {
    const template = 'Hello {{who.prefix}} {{who.name}}!'
    const data = { who: {
        prefix: 'Mr.',
        name: 'Underworld',
      } }
    expect(stripLitExpressionMarkers(renderLit(template, data).innerHTML)).toBe(renderMustache(template, data).innerHTML)
  })

  it('attribute data binding', () => {
    const template = '<div some-attri="{{someValue}}"></div>'
    const data = { someValue: 'some-value' }
    expect(renderLit(template, data).querySelector('[some-attri="some-value"]')).not.toBe(null)
  })

  it('string as data / {{.}}', () => {
    const template = 'hi {{.}}'
    const data = 'u'
    expect(stripLitExpressionMarkers(renderLit(template, data).innerHTML)).toBe('hi u')
  })
})

function renderMustache(template, data) {
  const container = document.createElement('div')
  container.innerHTML = Mustache.render(template, data)
  return container
}

function renderLit(template, data) {
  const container = document.createElement('div')
  render(parse(template)(data), container)
  return container
}

function stripLitExpressionMarkers (s) {
  return s.replace(/<!---->/g, '')
}