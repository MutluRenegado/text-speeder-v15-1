// src/components/UI/Button.js

import React from "react";
import clsx from "clsx";

/**
 * Button Component
 *
 * Props:
 * - children: ReactNode — button text or icon
 * - onClick: function — click handler
 * - variant: "primary" | "secondary" | "danger" | "ghost"
 * - size: "sm" | "md" | "lg"
 * - loading: boolean — shows spinner when true
 * - disabled: boolean
 * - className: string — optional custom styling
 */
export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-gray-100",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const spinner = (
    <svg
      className="animate-spin h-5 w-5 text-white ml-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {children}
      {loading && spinner}
    </button>
  );
}

