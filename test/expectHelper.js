import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

import Mustache from 'mustache'

import { compare } from 'dom-compare'

import createLitTemplateTransformer from "../src"

const parse = createLitTemplateTransformer(html, { directives: { unsafeHTML } }).parse

export function expectTemplatesInnerHTML(template, data) {
  expect(renderLitInnerHtml(template, data)).toBe(Mustache.render(template, data))
}

export function expectTemplatesDom(template, data) {
  const renderedLitNode = renderLitInto(template, data)
  const renderedMustache = renderMustacheInto(template, data)
  const differences = compare(renderedLitNode, renderedMustache).getDifferences()

  expect(differences).toEqual([])
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

function renderMustacheInto(template, data, container = document.createElement('div')) {
  container.innerHTML = Mustache.render(template, data)
  return container
}