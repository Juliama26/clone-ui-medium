import React from "react";

// eslint-disable-next-line react/prop-types
export default function Sticky({ children, Head }) {
  return (
    <div className="min-w-72 sticky top-0 py-8 md:py-20 bg-primary">
      <h2 className="text-3xl">{Head}</h2>
      <h2 className="text-5xl">{children}</h2>
    </div>
  );
}
