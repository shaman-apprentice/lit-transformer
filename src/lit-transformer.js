/** 
 * @param {object} config = {
 *  html: lit-html.html,
 *  delimiter: { start: '{{', end: '}}' },
 *  transformers: { // note that transformVariable is not here. It gets applied when no transformer.test has passed
 *    name: {
 *      test: (str, config) => bool,
 *      transform: (str, config) => ({
 *        remainingTmplStr: str,
 *        insertionPoint: ctx => lit-html.TemplateResult | undefined, // if undefined remainingTmplStr will be merged with last static part 
 *      }),
 *    },
 *  },
 *  transformVariable, 
 * }
 * @returns {function} strTemplate => ctx => lit-html.TemplateResult
 */
export default config => strTemplate => transform(strTemplate, config)

export function transform(tmpl2Parse, config) {
  const staticParts = []
  const insertionPoints = []

  let remainingTmplStr = tmpl2Parse
  let startIndexOfIP = remainingTmplStr.indexOf(config.delimiter.start)
  while (startIndexOfIP >= 0) {
    staticParts.push(remainingTmplStr.substring(0, startIndexOfIP))
    remainingTmplStr = remainingTmplStr.substring(startIndexOfIP + config.delimiter.start.length)

    const transform = getTransform(remainingTmplStr, config)
    const transformResult = transform(remainingTmplStr, config)

    // a template must become smaller with each transformation - if not there was probably a start tag without a closing tag
    if (transformResult.remainingTmplStr.length + config.delimiter.end.length >= remainingTmplStr.length)
      throw new Error(`'${tmpl2Parse}' is not a valid template - got stuck at '${remainingTmplStr}'`)

    if (transformResult.insertionPoint) {
      remainingTmplStr = transformResult.remainingTmplStr
      insertionPoints.push(transformResult.insertionPoint)
      startIndexOfIP = remainingTmplStr.indexOf(config.delimiter.start)
    } else { // e.g. comment or customDelimeter
      const lastStaticPart = staticParts.pop()
      remainingTmplStr = lastStaticPart + transformResult.remainingTmplStr
      startIndexOfIP = remainingTmplStr.indexOf(config.delimiter.start, lastStaticPart.length)
    }
  }

  staticParts.push(remainingTmplStr)

  return ctx =>
    config.html(staticParts, ...insertionPoints.map(iP => iP(ctx)))
}


function getTransform(remainingTmplStr, config) {
  const transformer = Object.values(config.transformers).find(t => t.test(remainingTmplStr, config))
  return transformer
    ? transformer.transform
    : config.transformVariable
}