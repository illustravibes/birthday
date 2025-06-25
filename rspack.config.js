module.exports = {
  context: __dirname,
  entry: "./script/main.js",
  devServer: {
    port: 1113,
    open: true,
    hot: true,
    static: {
      directory: "./",
    },
  },
  output: {
    path: "./dist",
    clean: true,
  },
  builtins: {
    html: [
      {
        template: "./index.html",
        inject: true,
      },
    ],
    copy: {
      patterns: [
        {
          from: "public",
          to: ".",
        },
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
      ],
    },
  },
};
