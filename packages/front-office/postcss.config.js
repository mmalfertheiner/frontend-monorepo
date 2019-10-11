const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    purgecss({
      content: [
        "./pages/**/*",
        "./components/**/*",
        "../../node_modules/ui/src/**/*.js"
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }),
    autoprefixer(),
    cssnano({
      preset: "default"
    })
  ]
};
