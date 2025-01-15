import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

// eslint-disable-next-line react/prop-types
export default function Links({ children }) {
  return (
    <Link
      to={`/`}
      className="flex items-center justify-between px-4 pl-6 py-14 border-t border-primary hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out"
    >
      <span className="text-5xl font-semibold">{children}</span>{" "}
      <GoArrowRight size={50} />
    </Link>
  );
}
