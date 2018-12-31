import { html, render } from 'lit-html'
import Mustache from 'mustache'

import litTemplating from '../index'

describe('data bindings', () => {
  beforeAll(() => {
    litTemplating.config.html = html;
  })

  it('no bindings at all', () => {
    const template = 'Hello world'
    expect(stripLitExpressionMarkers(renderLit(template).innerHTML)).toBe(renderMustache(template).innerHTML)
  })

  it('simple string data binding', () => {
    const template = 'Hello {{name}}!'
    const data = { name: 'underworld' }
    expect(stripLitExpressionMarkers(renderLit(template, data).innerHTML)).toBe(renderMustache(template, data).innerHTML)
  })
})

function renderMustache(template, data) {
  const container = document.createElement('div')
  container.innerHTML = Mustache.render(template, data)
  return container
}

function renderLit(template, data) {
  const container = document.createElement('div')
  render(litTemplating.parse(template)(data), container)
  return container
}

function stripLitExpressionMarkers (s) {
  return s.replace(/<!---->/g, '')
}