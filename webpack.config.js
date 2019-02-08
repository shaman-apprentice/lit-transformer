const path = require('path');

module.exports = {
    entry: './src/full-configured-lit-transformer.js',
    mode: 'development', // todo prod / minified
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'injectCreateLitTransformer.js',
        libraryExport: 'default',
        library: 'createLitTransformer',
        libraryTarget: 'window', // todo https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953
    },
};