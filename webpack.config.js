module.exports = {
  context: __dirname + '/src/js',
  entry: {
    app: './app.js',
  },
  output: {
    filename: 'dist/js/bundle.js'
  },
  module: {
            loaders: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
              },
              {
                 test: /\.css$/,
                 use: ['style-loader', 'css-loader'],
              }
            ]
        }
};