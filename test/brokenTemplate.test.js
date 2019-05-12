import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

import createTransform from '../src/full-configured-lit-transformer'

const transform = createTransform(html, unsafeHTML)

test('template with variable open tag but without variable closing tag does throw', () => {
  expect(() => transform('Hello {{who?')).toThrow()
})

test('exception includes where it got stuck', () => {
  expect(() => transform('Hello {{who?')).toThrow('missing end delimiter at: \'Hello {{who?')
})
