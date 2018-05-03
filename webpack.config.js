module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./bundle.js"
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ["*",".ts",".tsx",".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      }
    ]
  }
};
