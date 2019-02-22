module.exports = {
    mode: 'production',
    entry: './src/demo.js',
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
