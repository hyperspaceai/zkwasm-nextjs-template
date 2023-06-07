const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: "./src/zk/index.ts",
  output: {
    dir: "./public/zk",
    format: "iife",
    outro: "Object.assign(globalThis, exports);",
    name: "__zkwasm_bundle",
  },
  watch: {
    include: "./src/zk/**",
  },
  plugins: [typescript({ include: ["./src/zk/**/*.ts"] })],
};
