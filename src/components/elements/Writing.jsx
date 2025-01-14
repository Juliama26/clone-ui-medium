import React from "react";
import logo from "../../assets/member1.png";

export default function Writing() {
  return (
    <div className="flex gap-x-2">
      <img
        src={logo}
        alt="member"
        className="h-10 w-10 object-cover rounded-full border border-secondary"
      />
      <figcaption>
        <h3>Clive Thomas</h3>
        <p className="text-sm">Author of make it happen</p>
      </figcaption>
    </div>
  );
}
