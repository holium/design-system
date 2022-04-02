const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  // target: 'web',
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    library: {
      name: '@holium/design-system',
      // type: 'assign',
      type: 'commonjs',
    },
    // umdNamedDefine: true,
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    reactIs: 'react-is',
    styledComponents: 'styled-components',
    styledSystem: 'styled-system',
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
