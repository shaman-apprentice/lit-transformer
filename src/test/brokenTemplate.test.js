import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

import createTransform from '../full-configured-lit-transformer'


describe('broken templates', () => {
  const transform = createTransform(html, unsafeHTML)

  it('template with variable open tag but without variable closing tag does throw', () => {
    expect(() => transform('Hello {{who?')).toThrow()
  })

  it('exception includes full template and where it got stuck', () => {
    expect(() => transform('Hello {{who?')).toThrow(/'Hello {{who\?'.*'who\?'/)
  })
})
