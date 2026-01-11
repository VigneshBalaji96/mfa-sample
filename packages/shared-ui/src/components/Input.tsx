import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", ...rest }, ref) => {
    return (
      <div>
        {label && <label className="block text-gray-700 font-medium mb-2">{label}</label>}
        <input
          ref={ref}
          {...rest}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
