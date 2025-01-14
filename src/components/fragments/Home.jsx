import React from "react";
import Button from "../elements/Button";
import hero from "../../assets/hero.webp";

export default function Home() {
  return (
    <div className="px-4 md:pl-16 mt-28 md:mt-44 relative">
      <figure className="hidden md:block h-[490px] lg:h-[540px] absolute -top-28 right-0">
        <img src={hero} alt="Hero" className="h-full object-cover" />
      </figure>
      <figcaption className="flex flex-col gap-y-8">
        <h2 className="leading-tight text-6xl md:text-8xl font-semibold">
          Human <br /> stories & ideas
        </h2>
        <p className="text-2xl">
          A place to read, write, and deepen your understanding
        </p>
        <section>
          <Button className="px-8 py-3 font-semibold bg-accent md:bg-secondary md:border-secondary text-primary">
            Start reading
          </Button>
        </section>
      </figcaption>
    </div>
  );
}
