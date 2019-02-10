import { data2Value } from '../helper/dataHelper'

export default () => ({
  delimiter: {
    start: /{{/,
    end: /}}/,
  },
  transform,
})

export const transform = ({ innerTemplate }) =>
  data => data2Value(data, innerTemplate)