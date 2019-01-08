import { expectLitToBeMustache, renderLitInto, renderLitInnerHtml } from '../../test/expectHelper'

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

  // todo almost works -> assertions on jsdom would be nice due to only diffing in \n
  it.skip('with {{, {{{ and {{#', () => {
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

    console.log(renderLitInnerHtml(template, data))
    expectLitToBeMustache(template, data)
  })
})