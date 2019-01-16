import { data2Value } from '../helper/dataHelper'

export default () => ({
  delimiter: {
    start: /{{/,
    end: /}}/,
  },
  transform: ({ innerTemplate }) =>
      data => data2Value(data, innerTemplate)
})