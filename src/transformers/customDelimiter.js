export default () => ({
  test: remainingTmplStr => remainingTmplStr[0] === '=',
  transform: (remainingTmplStr, config) => {
    const originalEndDeliLength = config.delimiter.end.length
    const indexOfEndTag = remainingTmplStr.indexOf('=' + config.delimiter.end)
    if (indexOfEndTag < 0 )
      throw new Error(`missing end delimiter at: '${remainingTmplStr}'`)

    const [ newStartDeli, newEndDeli ] = remainingTmplStr.substring(1, indexOfEndTag).split(' ')

    config.delimiter.start = newStartDeli
    config.delimiter.end = newEndDeli
    
    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTag + 1 + originalEndDeliLength),
      insertionPoint: undefined,  
    }
  }
})