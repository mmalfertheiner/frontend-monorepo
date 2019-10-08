module.exports = {
  presets: ["@babel/preset-react"],
  plugins: [
    [
      "styled-jsx/babel",
      {
        plugins: [
          [
            "styled-jsx-plugin-postcss",
            {
              path: "./.storybook/postcss.config.js"
            }
          ]
        ]
      }
    ]
  ]
};
