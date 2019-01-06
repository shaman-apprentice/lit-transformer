import { data2Value } from './dataHelper'

export default function parse({ innerTemplate }) {
  return data => data2Value(data, innerTemplate)
}