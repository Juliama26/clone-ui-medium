import React from "react";

export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { children, className, Icon } = props;
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm border flex items-center gap-x-2 ${className}`}
    >
      {Icon}
      <span>{children}</span>
    </button>
  );
}
