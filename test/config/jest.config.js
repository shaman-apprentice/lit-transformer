module.exports = {
  'rootDir': '../..',
  'transform': {   '^.+\\.js$': '<rootDir>/test/config/babelJestTransformer.js' },
  'transformIgnorePatterns': [],
};