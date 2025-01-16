import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import OurStoryPage from "./pages/OurStoryPage";
import MembershipPage from "./pages/MembershipPage";
import Login from "./components/fragments/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
