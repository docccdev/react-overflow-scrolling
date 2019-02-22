var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        library: 'ReactOverflowScrolling',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    },
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
        }
    },
};
