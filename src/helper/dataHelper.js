export function ctx2Value(ctx, key) {
  return key.split('.').reduce((acc, key) => key ? acc[key] : acc, ctx)
}