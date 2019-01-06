module.exports = {
  'rootDir': '..',
  'transform': {   '^.+\\.js$': '<rootDir>/test/babelJestTransformer.js' },
  'transformIgnorePatterns': [],
};