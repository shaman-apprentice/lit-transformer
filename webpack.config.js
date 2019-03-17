const path = require('path');

module.exports = {
  entry: './src/bundled-lit-transformer.js',
  mode: 'production',
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'litTransformer.bundle.js',
    libraryExport: 'default',
    library: 'litTransformer',
    libraryTarget: 'window',
  },
};