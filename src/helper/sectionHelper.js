export function parseSection(tmplStr, delimiter) {
  const indexOfStartTagEnd = tmplStr.indexOf(delimiter.end)
  const dataKey = tmplStr.substring(1, indexOfStartTagEnd)
  const endTag = `${delimiter.start}/${dataKey}${delimiter.end}`
  const indexOfEndTagStart = tmplStr.indexOf(endTag)
  if (indexOfEndTagStart < 0)
    throw new Error(`missing end delimiter at: '${delimiter.start}${tmplStr}'`)
  
  return {
    dataKey,
    innerTmpl: tmplStr.substring(indexOfStartTagEnd + delimiter.start.length, indexOfEndTagStart),
    remainingTmplStr: tmplStr.substring(indexOfEndTagStart + endTag.length),
  }
}