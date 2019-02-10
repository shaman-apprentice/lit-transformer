
/** 
 * @param {object} config = {
 *   html: lit-html.html,
 *   transformers: {
 *     name: {
 *       delimiter: {
 *         start: RegExp,
 *         end: RegExp,
 *         createEnd: startMatch => RegExp,
 *       },
 *       transform: ({ config, innerTemplate, startMatch, endMatch }) => ctx => TemplateResult,
 *     }
 *   },
 * }
 * @returns {function} strTemplate => ctx => lit-html.TemplateResult
 */
export default config =>
  template => transform(template, config)

export function transform(template, config) {
  const staticParts = []
  const insertionPoints = []

  let str2Parse = template
  let iP = getNextInsertionPoint(str2Parse, config.transformers)
  while (iP) {
    staticParts.push(str2Parse.substring(0, iP.startMatch.index))

    insertionPoints.push(iP.transform({
      config,
      innerTemplate: str2Parse.substring(iP.startMatch.index + iP.startMatch[0].length, iP.endMatch.index),
      startMatch: iP.startMatch,
      endMatch: iP.endMatch,
    }))

    str2Parse = str2Parse.substring(iP.endMatch.index + iP.endMatch[0].length)

    iP = getNextInsertionPoint(str2Parse, config.transformers)
  }

  staticParts.push(str2Parse)

  return data =>
    config.html(staticParts, ...insertionPoints.map(iP => iP(data)))
}

function getNextInsertionPoint(template, transformers) {
  const candis = Object.values(transformers).map( t => ({ t, startMatch: t.delimiter.start.exec(template) }))
    .filter(c => c.startMatch)
    .sort(compareIPCandis)

  if (candis.length === 0)
    return undefined

  const fstIP = candis[0]
  return {
    startMatch: fstIP.startMatch,
    endMatch: (fstIP.t.delimiter.createEnd ? fstIP.t.delimiter.createEnd(fstIP.startMatch) : fstIP.t.delimiter.end)
      .exec(template),
    transform: fstIP.t.transform,
  }
}

export function compareIPCandis(c1, c2) {
  if (c1.startMatch.index === c2.startMatch.index)
    return c2.startMatch[0].length - c1.startMatch[0].length

  return c1.startMatch.index < c2.startMatch.index ? -1 : 1
}