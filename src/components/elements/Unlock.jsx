import React from "react";
import Button from "./Button";

export default function Unlock() {
  return (
    <div className="flex flex-col items-center gap-y-5 md:gap-y-10 py-10 md:py-20 bg-neutral-200">
      <h2 className="text-3xl md:text-5xl font-semibold">Unlock a world of wisdom</h2>
      <button>
        <Button className="bg-secondary text-primary">Get started</Button>
      </button>
    </div>
  );
}
