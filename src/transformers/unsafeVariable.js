import { data2Value } from './dataHelper'

/*
 * Note, this is unsafe to use cause the rendered output could be any JavaScript . */
export default unsafeHTML => ({
  delimiter: {
    start: /{{{/,
    end: /}}}/,
  },
  transform: ({innerTemplate}) =>
    data => unsafeHTML(data2Value(data, innerTemplate))
})