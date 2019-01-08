import { expectLitToBeMustache } from '../../test/expectHelper'


describe('data bindings', () => {
  it('falsy section with undefined', () => {
    const template = 'Hello {{#who}}Dr. Who{{/who}}!'
    const data = { who: undefined }
    expectLitToBeMustache(template, data)
  })

  it('section with list of strings', () => {
    const template = 'Hello {{#who}}{{.}}{{/who}}!'
    const data = { who: ['Dr.', ' Who'] }
    expectLitToBeMustache(template, data)
  })

  it('section with list of data without html in section template', () => {
    const template = '<ul>{{#persons}}{{person}}{{/persons}}</ul>'
    const data = { persons: [ { person: 'Mr. first' }, { person: 'Mr. second' } ] }
    expectLitToBeMustache(template, data)
  })

  it('section with list of data with html in section template', () => {
    const template = '<ul>{{#persons}}<li>{{person}}</li>{{/persons}}</ul>'
    const data = { persons: [ { person: 'Mr. first' }, { person: 'Mr. second' } ] }
    expectLitToBeMustache(template, data)
  })
})