const path = require('path');

module.exports = {
  mode: 'none',
  entry: './assets/js/app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'assets', 'js')
  }
};