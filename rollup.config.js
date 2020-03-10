import typescript from '@rollup/plugin-typescript';
// A Rollup plugin to convert CommonJS modules to ES6, so they can be
// included in a Rollup bundle
import commonjs from '@rollup/plugin-commonjs';
// Automatically externalize peerDependencies in a rollup bundle.
// Also optionally externalize dependencies in a rollup bundle.
import external from 'rollup-plugin-peer-deps-external';
// Integration between Rollup and PostCSS.
import postcss from 'rollup-plugin-postcss';
//  A Rollup plugin which locates modules using the Node resolution
// algorithm, for using third party modules in node_modules
import resolve from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    typescript(),
    postcss({
      modules: true,
      extract: 'dist/index.css',
      minimize: !process.env.ROLLUP_WATCH,
      plugins: [autoprefixer()],
    }),
    resolve(),
    commonjs(),
  ],
};
