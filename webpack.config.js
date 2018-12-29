const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development', // todo
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js', // todo rename to package name; minified
    }
};