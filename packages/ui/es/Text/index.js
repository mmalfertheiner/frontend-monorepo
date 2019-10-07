import { jsx as ___EmotionJSX } from "@emotion/core";
import React from "react";
import { css } from "@emotion/core";

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1d2x55d",
  styles: "background-color:#eee;"
} : {
  name: "1d2x55d",
  styles: "background-color:#eee;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFjIiwiZmlsZSI6Ii4uLy4uL3NyYy9UZXh0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgdGV4dCwgY2xhc3NOYW1lID0gXCJcIiwgY3NzOiBjc3NQcm9wIH0pID0+IHtcbiAgY29uc29sZS5sb2coY3NzUHJvcCk7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzTmFtZT17YHRleHQtcmVkLTcwMCAke2NsYXNzTmFtZX1gfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBgfVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG4iXX0= */"
};

export default (({
  text,
  className = "",
  css: cssProp
}) => {
  console.log(cssProp);
  return ___EmotionJSX("span", {
    className: `text-red-700 ${className}`,
    css: _ref
  }, text);
});