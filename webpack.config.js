const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  target: 'web',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    library: {
      name: '@plymouth/design-system',
      // type: 'assign',
      type: 'commonjs',
    },
    // umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], //resolve all the modules other than index.ts
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx|ts?$/,
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
