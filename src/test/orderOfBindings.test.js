import { expectLitToBeMustache, renderLitInto, renderLitInnerHtml } from '../../test/expectHelper'

describe('data bindings', () => {
  it('{{ before {{{', () => {
    const data = { who: {
        prefix: 'Mr.',
        name: 'Underworld',
      } }
    expectLitToBeMustache('Hello {{who.prefix}} {{{who.name}}}!', data)
  })
})