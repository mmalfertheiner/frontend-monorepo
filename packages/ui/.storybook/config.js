import { configure } from "@storybook/react";
import "./tailwind.css";

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);

if (module.hot) {
  module.hot.accept(() => configure(loadStories, module));
}
