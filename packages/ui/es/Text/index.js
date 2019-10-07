import React from "react";
import { css } from "@emotion/core";
export default (({
  text,
  className = "",
  css: cssProp
}) => {
  console.log(cssProp);
  return React.createElement("span", {
    className: `text-red-700 ${className}`,
    css: css`
        background-color: #eee;
      `
  }, text);
});