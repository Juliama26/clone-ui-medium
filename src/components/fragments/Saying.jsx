import React from "react";
import member from "../../assets/member1.png";

// eslint-disable-next-line react/prop-types
export default function Saying({ children, name, profesi }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-6">
      <img
        src={member}
        alt="member"
        className="h-20 w-20 rounded-full object-cover"
      />
      <section className="flex flex-col gap-y-4">
        <p className="text-lg">{children}</p>
        <p>
          <span className="font-semibold">{name}, </span> {profesi}
        </p>
      </section>
    </div>
  );
}
