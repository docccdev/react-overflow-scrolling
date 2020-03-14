var path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/demo.js'),
    output: {
        path: __dirname,
        filename: 'demo.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    },
};
