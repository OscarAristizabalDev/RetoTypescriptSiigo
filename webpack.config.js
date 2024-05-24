// webpack.config.js
module.exports = {
    entry: './app.ts', // Your entry point
    output: {
      filename: 'bundle.js', // Output bundle filename
      library: 'myLibrary', // Set your library name
      libraryTarget: 'umd', // Universal Module Definition
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    mode: 'development'
  };