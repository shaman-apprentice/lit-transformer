import { html } from 'lit-html'
import Mustache from 'mustache'

import { renderLitInto, renderMustacheInto } from '../../../test/expectHelper'

import createTransform from '../../lit-transformer'
import transformVariable from '../variable'
import customDelimiterTransformer from '../customDelimiter'
import commentTransformer from '../comment'

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

test('change tag does work', () => {
  const template = "{{=<% %>=}}Hello <%who%>. If I may say so, '_{{--}}_krghn' are weird characters within a name."
  const data = {
    who: 'Mr. Alien_{{--}}_krghn',
  }
  expectToBeEqual(template, data, transform)
})

test('change tag and resetting it does work', () => {
  const template = `
    {{=<% %>=}}
      Hello <%who%>. If I may say so, '_{{--}}_krghn' are weird characters within a name.
    <%={{ }}=%> 
    At least for a name at {{where}}.
  `
  const data = {
    who: 'Mr. Alien_{{--}}_krghn',
    where: 'earth',
  }

  expectToBeEqual(template, data, transform)
})

test('change tag changes all delimiter', () => {
  const template = "{{=<% %>=}}Hello <%who%>. <%!peep%>"
  const data = {
    who: 'Mr. Alien_{{--}}_krghn',
    ['!peep']: 'you ***',
  }
  expectToBeEqual(template, data, transform)
})

test('change tag to longer than 2 chars', () => {
  const template = "{{=<<% %>>=}}Hello <<%who%>>."
  const data = {
    who: 'Mr. Alien_{{--}}_krghn',
  }
  expectToBeEqual(template, data, transform)
})

test('missing end tag', () => {
  const template = "{{=<<% %>>}}Hello <<%who%>>."
  const data = {
    who: 'Mr. Alien_{{--}}_krghn',
  }
  expect(() => Mustache.render(template, data)).toThrow()
  expect(() => renderLitInto(template, data)).toThrow()
})

// due to different count of text nodes for now special expect here
function expectToBeEqual(template, data, transform) {
  const mustacheInnerHtml = renderMustacheInto(template, data).innerHTML
  const litInnerHtml = renderLitInto(template, data, transform).innerHTML
  expect(stripInnerHtml(mustacheInnerHtml)).toBe(stripInnerHtml(litInnerHtml))
}

const stripInnerHtml = s =>
  s.replace(/<!---->|\s\s+/g, ' ').trim()