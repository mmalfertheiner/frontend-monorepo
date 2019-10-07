import React from "react";
import classnames from 'classnames';
export default (({
  text,
  classes = {}
}) => {
  return React.createElement("span", {
    className: classnames("text-red-700", classes.text)
  }, text);
});