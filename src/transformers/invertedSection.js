import { data2Value } from '../helper/dataHelper'
import { isMustacheFalsy } from '../helper/isMustacheFalsy'

// todo test for start not greedy
// todo manual string parsing faster then RegEx?

export default () => ({
  delimiter: {
    start: /{{\^(.+?)}}/,
    createEnd: startMatch => new RegExp(`{{\/${startMatch[1]}}}`), // "?" makes it lazy / not a greedy match
  },
  transform: ({ innerTemplate, startMatch }) => {
    const dataKey = startMatch[1]

    return data => {
      const dataValue = data2Value(data, dataKey)
      return isMustacheFalsy(dataValue) ? innerTemplate : ``
    }
  }
})