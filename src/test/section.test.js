import { expectLitToBeMustache } from '../../test/expectHelper'


describe('data bindings', () => {
  it('falsy section with undefined', () => {
    const template = 'Hello {{#who}}Dr. Who{{/who}}!'
    const data = { who: undefined }
    expectLitToBeMustache(template, data)
  })

  it('PoC for section with List', () => {
    const template = 'Hello {{#who}}{{.}}{{/who}}!'
    const data = { who: ['Dr.', ' Who'] }
    expectLitToBeMustache(template, data)  })
})