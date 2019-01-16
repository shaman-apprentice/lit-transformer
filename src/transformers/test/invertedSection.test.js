import { expectTemplatesInnerHTML } from '../../../test/expectHelper'

describe('data bindings', () => {
  it('falsy inverted section with undefined', () => {
    const template = 'Hello {{^who}}not for real{{/who}}!'
    const data = { who: undefined }
    expectTemplatesInnerHTML(template, data)
  })

  it('truthy inverted section', () => {
    const template = 'Hello {{^who}}for real{{/who}}!'
    const data = { who: ['Dr.', ' Who'] }
    expectTemplatesInnerHTML(template, data)
  })
})