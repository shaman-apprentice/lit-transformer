export function data2Value(data, strKey) {
  return strKey.split('.').reduce((acc, key) => key ? acc[key] : acc, data)
}