const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development', // todo
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js', // todo rename to package name; minified
        libraryExport: 'default',
        library: 'createLitTemplateTransformer',
        libraryTarget: 'window', // todo https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953
    },
};