import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import OurStoryPage from "./pages/OurStoryPage";
import MembershipPage from "./pages/MembershipPage";
import Button from "./components/elements/Button";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              Menu={
                <div className="flex items-center gap-x-4">
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
                  <Button className="bg-secondary text-primary">
                    Get started
                  </Button>
                  <Button className="bg-secondary text-primary">Sign in</Button>
                  <Button className="bg-primary text-se">Sign up</Button>
                </div>
              }
            />
          }
        />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
