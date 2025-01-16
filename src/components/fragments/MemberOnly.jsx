import React from "react";
import member from "../../assets/member1.png";
import Button from "../elements/Button";
import { IoIosStarOutline } from "react-icons/io";
import Writing from "../elements/Writing";

export default function MemberOnly() {
  return (
    <section className=" md:h-[600px] flex flex-col md:flex-row bg-grayLight">
      <section className="flex flex-col justify-center gap-y-6 md:gap-y-12 px-6 py-12 md:py-0 mt-16 md:mt-0 border border-secondary">
        <h2 className="text-5xl md:text-8xl">Support human stories</h2>
        <p className="text-xl text-grayDark">
          Become a member to read without limits or ads, fund great writers, and
          join a global community of people who care about high-quality
          storytelling.
        </p>
        <section className="flex gap-x-4">
          <Button className="bg-secondary border-secondary text-primary">
            Get started
          </Button>
          <Button className="border-secondary">View plans</Button>
        </section>
      </section>
      <aside className="relative w-full text-primary">
        <img src={member} alt="Member" className="h-full w-full object-cover" />
        <section className="absolute bottom-5 left-5 space-y-3">
          <button className="flex items-center justify-center gap-x-2 px-4 py-2 text-sm rounded-full border bg-orange-500 text-secondary border-orange-500">
            <IoIosStarOutline size={25} />
            <span>Member-only-story</span>
          </button>
          <h3 className="text-3xl">The Case For Reforesting Our Cities</h3>
          <Writing />
        </section>
      </aside>
    </section>
  );
}
