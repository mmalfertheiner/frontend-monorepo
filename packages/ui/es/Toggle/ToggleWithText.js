import _JSXStyle from "styled-jsx/style";
import React from "react";
import classnames from "classnames";
export default (({
  id,
  value: checked,
  onChange,
  checkedText,
  unCheckedText
}) => {
  return React.createElement("div", {
    className: "jsx-2137086446"
  }, React.createElement("div", {
    className: "jsx-2137086446" + " " + "form-switch inline-block align-middle relative select-none w-12 mr-2 leading-normal"
  }, React.createElement("input", {
    id: id,
    checked: checked,
    type: "checkbox",
    onChange: onChange,
    className: "jsx-2137086446" + " " + "form-switch-checkbox hidden"
  }), React.createElement("label", {
    htmlFor: id,
    className: "jsx-2137086446" + " " + (classnames("form-switch-label", "block overflow-hidden cursor-pointer bg-white border rounded-full h-6 shadow-inner", {
      "bg-green-300 shadow-none": checked
    }) || "")
  })), React.createElement("label", {
    htmlFor: id,
    className: "jsx-2137086446" + " " + "text-xs text-grey-dark cursor-pointer"
  }, checked ? checkedText : unCheckedText), React.createElement(_JSXStyle, {
    id: "2137086446"
  }, ".form-switch-label.jsx-2137086446{-webkit-transition:background-color 0.2s ease-in;transition:background-color 0.2s ease-in;}.form-switch-label.jsx-2137086446:before{position:absolute;display:block;background-color:#fff;top:0;bottom:0;width:1.5rem;border-width:1px;border-radius:9999px;margin-left:-0.25rem;right:50%;content:\"\";-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}.form-switch-checkbox.jsx-2137086446:checked+.form-switch-label.jsx-2137086446:before{right:0;}"));
});