function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import classnames from "classnames";
export default (({
  children,
  classes = {},
  ...props
}) => {
  return React.createElement("button", _extends({
    className: classnames("button m-10 p-8 rounded bg-teal-300 text-sm text-white hover:bg-teal-500", classes.button)
  }, props), children);
});