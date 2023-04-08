import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-4 bg-purple-600 text-white">
      <div className="container mx-auto px-6">
        <h1 className="mb-2 text-3xl text-center">Todo</h1>
        <div className="flex items-center justify-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/create">Add todo</Link>
        </div>
      </div>
    </nav>
  );
}
