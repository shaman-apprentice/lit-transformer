import { transform } from './transformVariable'

export default () => ({
  test: remainingTmplStr => remainingTmplStr[0] === '=',
  transform: (remainingTmplStr, config) => {
    const originalEndDeliLength = config.delimiter.end.length
    const indexOfEndTag = remainingTmplStr.indexOf('=' + config.delimiter.end)
    const innerTmpl = remainingTmplStr.substring(1, indexOfEndTag)
    const newDelis = innerTmpl.split(' ')

    config.delimiter.start = newDelis[0]
    config.delimiter.end = newDelis[1]
    
    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTag + 1 + originalEndDeliLength),
      insertionPoint: ctx => '',  
    }
  }
})