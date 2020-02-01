var webpack = require('webpack');

var config = {
  mode: 'development',
  entry: {
    bundle: __dirname + '/index.js'
  },
  output: {
    path: __dirname + '/public'
  },
};

module.exports = config;
