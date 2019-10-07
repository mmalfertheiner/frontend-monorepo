import React from "react";
import classnames from "classnames";

export default ({ children, classes = {}, ...props }) => {
  return (
    <button
      className={classnames(
        "button m-10 p-8 rounded bg-teal-300 text-sm text-white hover:bg-teal-500",
        classes.button
      )}
      {...props}
    >
      {children}
    </button>
  );
};
