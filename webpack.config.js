const path = require('path');

module.exports = (_env, argv) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'DLDist'
    },
    devtool: 'source-map',
    watch: argv.mode === 'development' ? true : false
  };
};