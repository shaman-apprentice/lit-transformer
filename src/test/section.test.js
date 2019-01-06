import { html, render } from 'lit-html'
import Mustache from 'mustache'

import createLitTemplateTransformer from '../index'

const parse = createLitTemplateTransformer(html).parse

describe('data bindings', () => {
  it('falsy section with undefined', () => {
    const template = 'Hello {{#who}}Dr. Who{{/who}}!'
    const data = { who: undefined }
    expect(stripLitExpressionMarkers(renderLit(template, data).innerHTML)).toBe(renderMustache(template, data).innerHTML)
  })

  it('PoC for section with List', () => {
    const template = 'Hello {{#who}}{{.}}{{/who}}!'
    const data = { who: ['Dr.', ' Who'] }
    expect(stripLitExpressionMarkers(renderLit(template, data).innerHTML)).toBe(renderMustache(template, data).innerHTML)
  })
})

// todo refactor common test functions
// todo remove wrapping of Mustache.render :D

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