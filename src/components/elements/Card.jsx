import React from "react";

// eslint-disable-next-line react/prop-types
export default function Card({ title, price, children, Icon }) {
  return (
    <section className="flex flex-col items-center gap-y-3 border p-6">
      {Icon}
      <section className="flex flex-col items-center">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p>{price}</p>
      </section>
      <button className="w-full px-4 py-2 my-3 rounded-full bg-green-500 text-primary">
        Get started
      </button>
      {children}
    </section>
  );
}
