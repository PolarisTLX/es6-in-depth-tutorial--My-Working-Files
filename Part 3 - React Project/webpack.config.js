module.exports = {
  // the entry point for the application
  entry: [__dirname + "/app/index.js"],

  // webpack bundles all the code into one javascript file. this bundle.js is referred by the index.html
  output:{
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders:  [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}
