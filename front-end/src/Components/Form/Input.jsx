import { forwardRef } from "react";

const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}</label>
      <input
        className="border border-gray-300 rounded-md px-2 py-1"
        ref={ref}
        {...rest}
      />
    </div>
  );
});

export default Input;
