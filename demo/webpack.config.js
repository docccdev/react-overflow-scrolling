module.exports = {
    mode: 'production',
    entry: './src/demo.js',
    output: {
        filename: 'demo.js'
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
