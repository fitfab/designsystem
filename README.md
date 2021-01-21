# Rollupjs, Typescript, react and styled-components library setup `monorepo`

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

## TODO: Rollup & Babel setup
`yarn add --dev -W rollup @rollup/plugin-babel @babel/preset-typescript @babel/core @rollup/plugin-node-resolve rollup-plugin-peer-deps-external`

## Storybook setup
`yarn add --dev -W @storybook/react @storybook/addon-docs @storybook/preset-create-react-app`

## Reactjs
`yarn add --dev -W react react-dom styled-components`
