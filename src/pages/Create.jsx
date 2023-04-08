import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

export default function Create() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!title || !description) {
        setFormError("Please fill in all the fields correctly.");
        return;
      }
      const { data, error } = await supabase.from("todos").insert([{ title, description, completed }]);
      console.log(data);
      setFormError(null);
      navigate("/");
    } catch (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="px-6 py-4 max-w-xl mx-auto flex flex-col bg-white rounded-lg shadow-md">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label htmlFor="completed">Completed:</label>
          <input type="checkbox" id="completed" value={completed} onChange={(e) => setCompleted(e.target.checked)} />
          <button type="submit" className="">
            Add todo
          </button>
          {formError && <p className="text-red-500">{formError}</p>}
        </form>
      </div>
    </div>
  );
}
