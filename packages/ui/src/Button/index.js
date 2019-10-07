import React from "react";

export default ({ children, classes = {}, ...props }) => {
  console.log(classes)
  return (
    <button
      className={`button m-10 p-8 rounded bg-teal-300 text-sm text-white hover:bg-teal-500 ${classes.button && classes.button}`}
      {...props}
    >
      {children}
    </button>
  );
};
