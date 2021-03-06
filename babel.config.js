
module.exports = {
  presets: ["@babel/env", "@babel/preset-typescript", "@babel/react"],
  plugins: [
      [
          "babel-plugin-styled-components",
          {
              // Better Debugging -- adds className and displayName
              "displayName": true,
              // Suport for SSR
              "ssr": true,
              // Template String Transpilation -- smaller output than "babel-preset-latest"
              "transpileTemplateLiterals": true,
              // Dead Code Elimination
              "pure": true
          }
      ],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      // "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread"
  ]
}