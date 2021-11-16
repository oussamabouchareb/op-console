import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";

import packageJson from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
};
