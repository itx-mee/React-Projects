import React, { useId } from "react";

// we are using same input for various places ,
// to know which input must be selected/changed
// we give reference(ref) to each input and pass while creating
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  // we are giving same id to label and input
  // so that the function execute for both click/change/..
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
