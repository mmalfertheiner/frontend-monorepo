import React from "react";
import classnames from "classnames";

export default ({
  id,
  value: checked,
  onChange,
  checkedText,
  unCheckedText
}) => {
  return (
    <div>
      <div className="form-switch inline-block align-middle relative select-none w-12 mr-2 leading-normal">
        <input
          id={id}
          checked={checked}
          type="checkbox"
          className="form-switch-checkbox hidden"
          onChange={onChange}
        />
        <label
          className={classnames(
            "form-switch-label",
            "block overflow-hidden cursor-pointer bg-white border rounded-full h-6 shadow-inner",
            { "bg-green-300 shadow-none": checked }
          )}
          htmlFor={id}
        ></label>
      </div>
      <label className="text-xs text-grey-dark cursor-pointer" htmlFor={id}>
        {checked ? checkedText : unCheckedText}
      </label>
      <style jsx>
        {`
          .form-switch-label {
            transition: background-color 0.2s ease-in;
          }

          .form-switch-label:before {
            @apply absolute block bg-white inset-y-0 w-6 border rounded-full -ml-1;

            right: 50%;
            content: "";
            transition: all 0.2s ease-in;
          }

          .form-switch-checkbox:checked + .form-switch-label,
          .form-switch-checkbox:checked + .form-switch-label:before {
          }

          .form-switch-checkbox:checked + .form-switch-label:before {
            @apply right-0;
          }
        `}
      </style>
    </div>
  );
};
