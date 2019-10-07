import _styled from "@emotion/styled-base";
import { jsx as ___EmotionJSX } from "@emotion/core";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const Button = _styled("button", {
  target: "edgglvr0",
  label: "Button"
})(process.env.NODE_ENV === "production" ? {
  name: "1rwx7to",
  styles: "&:hover{color:white;}"
} : {
  name: "1rwx7to",
  styles: "&:hover{color:white;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRzRCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW4sIC4uLnByb3BzfSkgPT4ge1xuICAgIHJldHVybiA8QnV0dG9uIGNsYXNzTmFtZT1cIm0tMTAgcC04IHJvdW5kZWQgYmctdGVhbC0zMDAgdGV4dC1zbSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXRlYWwtNTAwXCIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9CdXR0b24+XG59XG4iXX0= */"
});

export default (({
  children,
  ...props
}) => {
  return ___EmotionJSX(Button, _extends({
    className: "m-10 p-8 rounded bg-teal-300 text-sm text-white hover:bg-teal-500"
  }, props), children);
});