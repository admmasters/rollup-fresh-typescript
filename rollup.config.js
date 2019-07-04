import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

const name = "RollupFresh";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
  {
    input: "src/index.ts",
    external: [],
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({ extensions, include: ["src/**/*"] })
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs"
      },
      {
        file: pkg.module,
        format: "es"
      },
      {
        file: pkg.browser,
        format: "iife",
        name,

        // https://rollupjs.org/guide/en#output-globals-g-globals
        globals: {}
      }
    ]
  }
];
