export function ctx2Value(ctx, key) {
  if (key === '.')
    return ctx

  let result = ctx
  for (let k of key.split('.')) {
    if (!result.hasOwnProperty(k))
      return ''

    result = result[k]
  }
  return result;
}