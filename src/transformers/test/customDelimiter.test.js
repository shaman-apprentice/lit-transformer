import {renderLitInto, renderMustacheInto} from '../../../test/expectHelper'

import { html } from 'lit-html'
import createTransform from '../../lit-transformer'
import variableTransformer from '../variable'
import customDelimiter from '../customDelimiter'

describe('custom delimiter', () => {
  let transform;
  
  beforeEach(() => {
    transform = createTransform({
      html,
      transformers: {
        variable: variableTransformer(),
        customDelimiter: customDelimiter(),
      },
    })
  })

  it('change tag does work', () => {
    const template = "{{=<% %>=}}Hello <%who%>. If I may say so, '_{{--}}_krghn' are weird characters within a name."
    const data = { 
      who: 'Mr. Alien_{{--}}_krghn',
    }
    expectToBeEqual(template, data, transform)
  })

  it('change tag and resetting it does work', () => {
    const template = `
      {{=<% %>=}}
        Hello <%who%>. If I m say so, '_{{--}}_krghn' are weird characters within a name.
      <%={{ }}=%> 
      At least for a name at {{where}}.
    `
    const data = { 
      who: 'Mr. Alien_{{--}}_krghn',
      where: 'earth',
    }

    expectToBeEqual(template, data, transform)
  })
})

// due to different count of text nodes for now special expect here
function expectToBeEqual(template, data, transform) {
  const mustacheInnerHtml = renderMustacheInto(template, data).innerHTML
  const litInnerHtml = renderLitInto(template, data, transform).innerHTML
  expect(stripInnerHtml(mustacheInnerHtml)).toBe(stripInnerHtml(litInnerHtml))
}

const stripInnerHtml = s =>
  s.replace(/<!---->|\s\s+/g, ' ').trim()