import React from "react";

// eslint-disable-next-line react/prop-types
export default function Text({ children, Head }) {
  return (
    <div className="py-8">
      <h2 className="text-3xl md:text-5xl">{Head}</h2>
      <p>{children}</p>
    </div>
  );
}
