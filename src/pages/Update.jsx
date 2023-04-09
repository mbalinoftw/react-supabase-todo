import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data, error } = await supabase.from("todos").select().eq("id", id).single();
        console.log("🚀 | file: Update.jsx:17 | data:", data);
        setTitle(data.title);
        setDescription(data.description);
      } catch (error) {}
    };
    fetchTodo();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!title || !description) {
        setFormError("Please fill in all the fields correctly.");
        return;
      }
      const { data, error } = await supabase.from("todos").update([{ title, description, completed }]);
      console.log(data);
      setFormError(null);
      setTitle(data.title);
      setDescription(data.description);
      navigate("/");
    } catch (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="px-6 py-4 max-w-xl mx-auto bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-[7rem_1fr]">
            <label htmlFor="title" className="mb-1 text-sm text-gray-800">
              Title
            </label>
            <input
              className="mb-4 p-2 border"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description" className="mb-1 text-sm text-gray-800">
              Description
            </label>
            <textarea
              className="mb-4 p-2 border"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="block w-full md:w-auto mt-4 px-8 py-2 mx-auto bg-purple-500 text-white rounded-md">
            Update todo
          </button>
          {formError && <p className="mt-2 text-red-500">{formError}</p>}
        </form>
      </div>
    </div>
  );
}
