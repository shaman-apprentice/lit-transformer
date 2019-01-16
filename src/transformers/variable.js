import { data2Value } from './dataHelper'

export default () => ({
  delimiter: {
    start: /{{/,
    end: /}}/,
  },
  transform: ({ innerTemplate }) =>
      data => data2Value(data, innerTemplate)
})