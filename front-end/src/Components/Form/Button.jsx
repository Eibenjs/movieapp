import { forwardRef } from "react";

const Button = forwardRef(({ children, ...rest }, ref) => {
  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded-md"
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;