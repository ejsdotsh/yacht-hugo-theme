const path = require('path');

module.exports = {
  mode: 'none',
  entry: './assets/js/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'js')
  },
  watch: true,
};
