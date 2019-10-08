import React from "react";
import classnames from "classnames";
export default (({
  id,
  value: checked,
  onChange
}) => {
  return React.createElement("div", {
    className: "relative select-none w-6 leading-normal"
  }, React.createElement("input", {
    id: id,
    checked: checked,
    type: "checkbox",
    className: "hidden",
    onChange: onChange
  }), React.createElement("label", {
    className: classnames("block overflow-hidden cursor-pointer bg-white border rounded-full h-6", {
      "bg-green-300": checked
    }),
    htmlFor: id
  }));
});