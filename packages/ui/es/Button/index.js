function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import styled from '@emotion/styled';
const Button = styled.button`
  &:hover {
    color: white;
  }
`;
export default (({
  children,
  ...props
}) => {
  return React.createElement(Button, _extends({
    className: "m-10 p-8 rounded bg-teal-300 text-sm text-white hover:bg-teal-500"
  }, props), children);
});