import React from "react";
import { FiCheck } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export default function Span({ children, className }) {
  return (
    <p className="w-full flex items-center gap-x-2 text-sm">
      <FiCheck size={20} color="green" />
      <span className={className}>{children}</span>
    </p>
  );
}
