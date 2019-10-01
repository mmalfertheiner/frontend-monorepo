import React from 'react';
export default (({
  children,
  ...props
}) => {
  return React.createElement("button", props, children);
});