// src/components/UI/Card.js

import React from "react";
import clsx from "clsx";

/**
 * Card Component
 *
 * Props:
 * - children: ReactNode — main card content
 * - title: string — optional card title
 * - footer: ReactNode — optional footer section
 * - hoverable: boolean — adds hover shadow (default: true)
 * - className: string — extra Tailwind classes
 */
export default function Card({
  title,
  children,
  footer,
  hoverable = true,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl shadow-sm border border-gray-200 p-4 transition-all",
        hoverable && "hover:shadow-md hover:border-gray-300",
        className
      )}
    >
      {/* Card Header */}
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2">
          {title}
        </h3>
      )}

      {/* Card Body */}
      <div className="text-gray-700">{children}</div>

      {/* Card Footer */}
      {footer && <div className="mt-3 pt-2 border-t text-sm">{footer}</div>}
    </div>
  );
}

