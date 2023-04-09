import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TodoCard({ todo }) {
  const { id, title, description, completed } = todo;

  return (
    <Link to={`/${id}`} className="px-6 py-4 flex flex-col bg-white rounded-lg shadow-md">
      <h3 className="mb-2 text-xl font-bold text-gray-700">{title}</h3>
      <p className="mb-4 flex-1 text-gray-600 text-sm">{description}</p>
      <div className="mt-auto flex items-center justify-end gap-1.5">
        <button className="p-2 rounded-full">
          <FaEdit />
        </button>
        <button className="p-2 rounded-full">
          <FaTrash />
        </button>
      </div>
    </Link>
  );
}
