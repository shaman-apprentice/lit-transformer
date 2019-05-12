import { expectTemplatesInnerHTML } from '../../../test/expectHelper'

test('template with comment', () => {
  const template = 'Hello {{who}} {{! you *** }} uhm - I wish a nice day'
  const data = { 
    who: 'Mr.',
    ['! you *** ']: 'some not nice text',
  }
  expectTemplatesInnerHTML(template, data)
})