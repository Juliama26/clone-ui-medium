import React from "react";

import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const hideMenu = ["/our-story", "/membership"].includes(location.pathname);
  return (
    <footer className="border-t border-secondary">
      <section
        className={`${
          !hideMenu ? "container mx-auto px-4 md:px-12" : "px-6"
        } flex justify-between items-center py-3`}
      >
        <h2 className="text-2xl font-extrabold">Medium</h2>
        <ul className="text-grayDark flex justify-center gap-x-4 text-sm">
          <li>About</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Help</li>
          <li className="hidden md:block">Teams</li>
          <li className="hidden md:block">Press</li>
          {!hideMenu && (
            <>
              <li className="hidden md:block">Careers</li>
              <li className="hidden md:block">Status</li>
              <li className="hidden md:block">Blog</li>
              <li className="hidden md:block">Text to speech</li>
            </>
          )}
        </ul>
      </section>
    </footer>
  );
}
