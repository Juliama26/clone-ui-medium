import React from "react";

export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { children, className, OnClick } = props;
  return (
    <button
      onClick={OnClick}
      className={`flex items-center justify-center gap-x-6 px-4 py-2 text-sm rounded-full border ${className}`}
    >
      <span>{children}</span>
    </button>
  );
}
