import React from "react";

export default function BtnIcon(props) {
  // eslint-disable-next-line react/prop-types
  const { children, className, Icon } = props;
  return (
    <button
      className={`flex items-center justify-center gap-x-6 px-4 py-2 text-sm rounded-full border ${className}`}
    >
      <p>{Icon}</p>
      <span>{children}</span>
    </button>
  );
}
