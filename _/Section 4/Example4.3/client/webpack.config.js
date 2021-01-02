module.exports = {
  context: __dirname,
  entry: "./client.js",
  watch: true,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
};
