module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-jsx/babel",
      {
        plugins: [
          [
            "styled-jsx-plugin-postcss",
            {
              path: "./postcss.config.js"
            }
          ]
        ]
      }
    ]
  ]
};
