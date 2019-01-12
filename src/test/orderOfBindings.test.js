import { expectLitToBeMustache, expectTemplatesDom } from '../../test/expectHelper'

describe('data bindings', () => {
  it('{{ before {{{', () => {
    const data = { who: {
        prefix: 'Mr.',
        name: 'Underworld',
      } }
    expectLitToBeMustache('Hello {{who.prefix}} {{{who.name}}}!', data)
  })

  it('{{{ before {{', () => {
    const data = { who: {
        prefix: 'Mr.',
        name: 'Underworld',
      } }
    expectLitToBeMustache('Hello {{{who.prefix}}} {{who.name}}!', data)
  })

  it('with {{, {{{ and {{#', () => {
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
})