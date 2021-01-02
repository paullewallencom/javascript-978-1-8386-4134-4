module.exports = {
  context: __dirname,
  entry: "./app.spec.js",
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: __dirname + "/test-output",
    filename: "bundle.spec.js"
  }
};
