import React from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../elements/Button";

export default function Header() {
  const location = useLocation();

  const hideMenu = ["/our-story", "/membership"].includes(location.pathname);
  const switchColor = ["/our-story"].includes(location.pathname);

  return (
    <header
      className={`z-[1] border-b ${
        switchColor
          ? "bg-secondary border-b-primary"
          : "bg-primary border-b-secondary fixed top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`${
          !hideMenu ? "container mx-auto px-4 md:px-12" : "px-6"
        } flex justify-between items-center py-4`}
      >
        <Link
          to={`/`}
          className={`text-3xl font-extrabold ${
            switchColor ? "text-primary" : ""
          }`}
        >
          Medium
        </Link>
        <section className="flex items-center gap-x-4">
          {!hideMenu && (
            <>
              <ul className="hidden md:flex gap-x-4">
                <Link to={`/our-story`} className="text-sm">
                  Our story
                </Link>
                <Link to={`/membership`} className="text-sm">
                  Membership
                </Link>
              </ul>
              <button className="hidden md:block text-sm">Write</button>
              <button className="hidden md:block text-sm">Sign in</button>
              <Button className="bg-secondary border-secondary text-primary">Get started</Button>
            </>
          )}
          {hideMenu && (
            <>
              <Button className="bg-secondary border-secondary text-primary">Sign in</Button>
              <Button className="bg-primary text-secondary border-secondary">
                Sign up
              </Button>
            </>
          )}
        </section>
      </nav>
    </header>
  );
}
