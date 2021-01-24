# Design System setup react and styled-components

setting a multiple monorepo mechanism with lerna and yarn workspaces.

## Lerna setup

`npx lerna init`

This Command will generate a package.json and lerna.json file.

Setup the `workspaces` in the `package.json` and tell Lerna to use `yarn` as the npmClient. Also set the version to `independent` so we can enforce [semver](https://semver.org/) for each package.

```json
// package.json
{
  "name": "root",
  "private": true,
  "workspaces": ["packages/*"],
  "devDependencies": {
    "lerna": "^3.22.1"
  }
}
```

```json
// lerna.json
{
  "packages": ["packages/*"],
  "npmClient": "yarn",
  "useWorkspaces": true,
  "version": "independent"
}
```
## Babel setup 

`yarn add --dev -W @babel/cli @babel/core @babel/preset-react @babel/preset-env babel-core@7.0.0-bridge.0 babel-loader babel-plugin-styled-components webpack`

## Storybook setup
`yarn add --dev -W @storybook/react @storybook/addon-docs @storybook/preset-create-react-app`

## Reactjs
`yarn add --dev -W react react-dom styled-components`


## TODO: Rollup
`yarn add --dev -W rollup @rollup/plugin-babel @babel/preset-typescript @babel/core @rollup/plugin-node-resolve rollup-plugin-peer-deps-external`

```js
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
```
