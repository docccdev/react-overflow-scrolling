var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, '192.168.1.7', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 192.168.1.7:3000');
});
