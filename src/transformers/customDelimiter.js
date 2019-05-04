export default () => ({
  test: remainingTmplStr => remainingTmplStr[0] === '=',
  transform: (remainingTmplStr, config) => {
    const originalEndDeliLength = config.delimiter.end.length
    const indexOfEndTag = remainingTmplStr.indexOf('=' + config.delimiter.end)
    const innerTmpl = remainingTmplStr.substring(1, indexOfEndTag)
    const [ newStartDeli, newEndDeli ] = innerTmpl.split(' ')

    config.delimiter.start = newStartDeli
    config.delimiter.end = newEndDeli
    
    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTag + 1 + originalEndDeliLength),
      insertionPoint: undefined,  
    }
  }
})