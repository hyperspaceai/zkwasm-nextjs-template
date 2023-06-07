const path = require("path");
const webpack = require("webpack");

webpack(
  {
    entry: "../src/zk/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
    },
    target: "webworker",
  },
  (err, stats) => {
    console.log("built ts");
  }
);
