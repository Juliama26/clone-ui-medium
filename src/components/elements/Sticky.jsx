import React from "react";

// eslint-disable-next-line react/prop-types
export default function Sticky({ children, Head }) {
  return (
    <div className="md:min-w-[500px] sticky top-0 py-8 md:py-20 bg-primary">
      <h2 className="text-5xl md:text-6xl">{children}</h2>
    </div>
  );
}
