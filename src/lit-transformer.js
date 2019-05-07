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
    if (remainingTmplStr.indexOf(config.delimiter.end, startIndexOfIP) < 0)
      throw new Error(`missing end delimiter at: '${remainingTmplStr}'`)

    staticParts.push(remainingTmplStr.substring(0, startIndexOfIP))

    const iPTransformResult = transformIP(
      remainingTmplStr.substring(startIndexOfIP + config.delimiter.start.length),
      config
    )

    if (iPTransformResult.insertionPoint) {
      remainingTmplStr = iPTransformResult.remainingTmplStr
      insertionPoints.push(iPTransformResult.insertionPoint)
      startIndexOfIP = remainingTmplStr.indexOf(config.delimiter.start)
    } else { // e.g. comment or customDelimeter
      const lastStaticPart = staticParts.pop()
      remainingTmplStr = lastStaticPart + iPTransformResult.remainingTmplStr
      startIndexOfIP = remainingTmplStr.indexOf(config.delimiter.start, lastStaticPart.length)
    }
  }

  staticParts.push(remainingTmplStr)

  return ctx =>
    config.html(staticParts, ...insertionPoints.map(iP => iP(ctx)))
}

function transformIP(remainingTmplStr, config) {
  const transformer = Object.values(config.transformers).find(t => t.test(remainingTmplStr, config))
  const transformFunction = transformer
    ? transformer.transform
    : config.transformVariable
  return transformFunction(remainingTmplStr, config)
}