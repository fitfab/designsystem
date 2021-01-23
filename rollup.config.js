import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel'
import pkg from './package.json';
import path from 'path'

import analyze from 'rollup-plugin-analyzer'

import external from 'rollup-plugin-peer-deps-external'

const extensions = ['.ts', '.tsx']
const PACKAGE_ROOT =  './packages/**/*/index.js'

const wd = path.resolve(__dirname, 'packages/button/src/index.js' )
console.log('wd: ', wd);

export default {
    input: wd, //'./src/index.ts',
    plugins: [
        external(),
        // Allows node_modules resolution
        resolve({ extensions }),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'], babelHelpers: 'bundled' }),
        analyze({ limit: 0 }),
    ],

    output: [
        // Only exporting es modules
        {
            file: pkg.module,
            format: 'es',
        },
    ],
}