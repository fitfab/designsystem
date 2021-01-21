import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel'
import pkg from './package.json';

import analyze from 'rollup-plugin-analyzer'

import external from 'rollup-plugin-peer-deps-external'

const extensions = ['.ts', '.tsx']

export default {
    input: './src/index.ts',
    plugins: [
        external(),
        // Allows node_modules resolution
        resolve({ extensions }),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'] }),
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