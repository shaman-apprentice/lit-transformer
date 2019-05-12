import { expectTemplatesInnerHTML } from '../../../test/expectHelper'

describe('section', () => {
  it('falsy section with undefined', () => {
    const template = 'Hello {{#who}}Dr. Who{{/who}}!'
    const data = { who: undefined }
    expectTemplatesInnerHTML(template, data)
  })

  it('section with list of strings', () => {
    const template = 'Hello {{#who}}{{.}}{{/who}}!'
    const data = { who: ['Dr.', ' Who'] }
    expectTemplatesInnerHTML(template, data)
  })

  it('section with list of data without html in section template', () => {
    const template = '<ul>{{#persons}}{{person}}{{/persons}}</ul>'
    const data = { persons: [ { person: 'Mr. first' }, { person: 'Mr. second' } ] }
    expectTemplatesInnerHTML(template, data)
  })

  it('section with list of data with html in section template', () => {
    const template = '<ul>{{#persons}}<li>{{person}}</li>{{/persons}}</ul>'
    const data = { persons: [ { person: 'Mr. first' }, { person: 'Mr. second' } ] }
    expectTemplatesInnerHTML(template, data)
  })

  it('data binding in list with null pointer exception', () => {
    const data = { list: [ {x:1}, {x:2} ] }
    expectTemplatesInnerHTML('{{#list}}{{x.y}}{{/list}}', data)
  })
})