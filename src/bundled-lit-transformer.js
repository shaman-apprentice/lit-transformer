import {html, render} from 'lit-html'
import {unsafeHTML} from 'lit-html/directives/unsafe-html'

import createTransformer from './full-configured-lit-transformer'

const litTransformer = {
  transform: createTransformer(html, unsafeHTML),
  render,
}

export default litTransformer