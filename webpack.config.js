const path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    watchContentBase: true
  }
};
