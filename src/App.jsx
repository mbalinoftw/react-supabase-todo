import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen grid grid-rows-[auto_1fr]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
