import { data2Value } from './dataHelper'

export default function parse({ innerTemplate, config }) {
  return data => config.directives.unsafeHTML
    ? config.directives.unsafeHTML(data2Value(data, innerTemplate))
    : config.directives.unsafeHTML
}