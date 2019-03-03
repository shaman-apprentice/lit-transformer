import { renderLitInto, renderMustacheInto } from '../../../test/expectHelper'

import { html } from 'lit-html'
import createTransform from '../../lit-transformer'
import transformVariable from '../transformVariable'
import customDelimiterTransformer from '../customDelimiter'
import commentTransformer from '../comment'

describe('custom delimiter', () => {
  let transform;

  beforeEach(() => {
    transform = createTransform({
      html,
      delimiter: { start: '{{', end: '}}' },
      transformVariable,
      transformers: {
        customDelimiter: customDelimiterTransformer(),
        comment: commentTransformer(),
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

  it('change tag changes all delimiter', () => {
    const template = "{{=<% %>=}}Hello <%who%>. <%!peep%>"
    const data = {
      who: 'Mr. Alien_{{--}}_krghn',
      ['!peep']: 'you ***',
    }
    expectToBeEqual(template, data, transform)
  })

  it('change tag to longer than 2 chars', () => {
    const template = "{{=<<% %>>=}}Hello <<%who%>>."
    const data = {
      who: 'Mr. Alien_{{--}}_krghn',
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