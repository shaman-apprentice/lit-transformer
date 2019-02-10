import { html, render } from 'lit-html'
import { unsafeHTML } from '../node_modules/lit-html/directives/unsafe-html.js'

import Mustache from 'mustache'

import { compare } from 'dom-compare'

import createTransform from '../src/full-configured-lit-transformer'

const defaultTransform = createTransform(html, unsafeHTML)

export function expectTemplatesInnerHTML(template, data) {
  expect(renderLitInnerHtml(template, data)).toBe(Mustache.render(template, data))
}

export function expectTemplatesDom(template, data) {
  const renderedLitNode = renderLitInto(template, data)
  const renderedMustache = renderMustacheInto(template, data)
  const differences = compare(renderedLitNode, renderedMustache).getDifferences()

  expect(differences).toEqual([])
}

export function renderLitInto(template, data, transform = defaultTransform) {
  const container = document.createElement('div')
  render(transform(template)(data), container)
  return container
}

export function renderLitInnerHtml(template, data) {
  return stripLitExpressionMarkers(renderLitInto(template, data).innerHTML)
}

export function renderMustacheInto(template, data) {
  const container = document.createElement('div')
  container.innerHTML = Mustache.render(template, data)
  return container
}

function stripLitExpressionMarkers (s) {
  return s.replace(/<!---->/g, '')
}