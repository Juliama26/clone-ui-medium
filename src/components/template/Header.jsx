import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";

import Button from "../elements/Button";
import Login from "../fragments/Login";
import Register from "../fragments/Register";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [signIn, setSignIn] = React.useState(false);
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
              <button
                onClick={() => setOpen(!open)}
                className="hidden md:block text-sm"
              >
                {!open ? "Write" : "Write"}
              </button>
              <button
                onClick={() => setSignIn(!signIn)}
                className="hidden md:block text-sm"
              >
                {!signIn ? "Sign in" : "Sign in"}
              </button>
              <Button
                OnClick={() => setOpen(!open)}
                className="bg-secondary border-secondary text-primary"
              >
                {!open ? "Get started" : "Get started"}
              </Button>
              {open && (
                <>
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 md:right-1/3 cursor-pointer z-[3] text-grayDark"
                  >
                    <MdClose size={25} />
                  </button>
                  <Register title="Join Medium." />
                </>
              )}
              {signIn && (
                <>
                  <button
                    onClick={() => setSignIn(false)}
                    className="absolute top-6 right-6 md:right-1/3 cursor-pointer z-[3] text-grayDark"
                  >
                    <MdClose size={25} />
                  </button>
                  <Login title="Welcome back." />
                </>
              )}
            </>
          )}
          {hideMenu && (
            <>
              <Button
                OnClick={() => setSignIn(!signIn)}
                className="bg-secondary border-secondary text-primary"
              >
                {!signIn ? "Sign in" : "Sign in"}
              </Button>
              <Button
                OnClick={() => setOpen(!open)}
                className="bg-primary text-secondary border-secondary"
              >
                {!open ? " Sign up" : "Sign up"}
              </Button>
              {open && (
                <>
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 md:right-1/3 cursor-pointer z-[3] text-grayDark"
                  >
                    <MdClose size={25} />
                  </button>
                  <Register title="Join Medium." />
                </>
              )}
              {signIn && (
                <>
                  <button
                    onClick={() => setSignIn(false)}
                    className="absolute top-6 right-6 md:right-1/3 cursor-pointer z-[3] text-grayDark"
                  >
                    <MdClose size={25} />
                  </button>
                  <Login title="Welcome back." />
                </>
              )}
            </>
          )}
        </section>
      </nav>
    </header>
  );
}
