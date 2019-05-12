import { expectTemplatesInnerHTML, expectTemplatesDom } from './expectHelper'

test('{{ before {{{', () => {
  const data = { who: {
      prefix: 'Mr.',
      name: 'Underworld',
    } }
  expectTemplatesInnerHTML('Hello {{who.prefix}} {{{who.name}}}!', data)
})

test('{{{ before {{', () => {
  const data = { who: {
      prefix: 'Mr.',
      name: 'Underworld',
    } }
  expectTemplatesInnerHTML('Hello {{{who.prefix}}} {{who.name}}!', data)
})

test('with {{, {{{ and {{#', () => {
  const data = {
    fancyIntro: 'Fancy persons:',
    persons: [
      { person: '<li>Mr. first</li>' },
      { person: '<li>Mr. second</li>' },
    ],
  }
  const template = `
    <h2>{{fancyIntro}}</h2>
    <ul>
    {{#persons}}
      {{{person}}}
    {{/persons}}
    </ul>
  `

  expectTemplatesDom(template, data)
})
