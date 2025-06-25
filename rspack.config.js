const rspack = require("@rspack/core");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./script/main.js",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    port: 1113,
    open: true,
    hot: true,
    static: {
      directory: "./",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
      inject: "body",
      filename: "index.html",
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: "img",
          to: "img",
        },
        {
          from: "music",
          to: "music",
        },
        {
          from: "fonts",
          to: "fonts",
        },
        {
          from: "style",
          to: "style",
        },
        {
          from: "wishes.json",
          to: "wishes.json",
        },
        {
          from: "script/firework.js",
          to: "script/firework.js",
        },
      ],
    }),
  ],
};
