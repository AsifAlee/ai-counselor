"use client";

import Spinner from "./Spinner";

export default function LoadingButton({
  isLoading,
  children,
  className = "",
  handleClick,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`
        w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2
        transition
        ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-blue-700"
        } 
        text-white
        ${className}
      `}
      onClick={handleClick}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
}
