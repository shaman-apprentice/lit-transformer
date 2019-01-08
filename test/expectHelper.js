import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

import Mustache from 'mustache'

import createLitTemplateTransformer from "../src"

const parse = createLitTemplateTransformer(html, { directives: { unsafeHTML } }).parse

export function expectLitToBeMustache(template, data) {
  expect(renderLitInnerHtml(template, data)).toBe(Mustache.render(template, data))
}

export function renderLitInto(template, data, container = document.createElement('div')) {
  render(parse(template)(data), container)
  return container
}

export function renderLitInnerHtml(template, data) {
  return stripLitExpressionMarkers(renderLitInto(template, data).innerHTML)
}

function stripLitExpressionMarkers (s) {
  return s.replace(/<!---->/g, '')
}