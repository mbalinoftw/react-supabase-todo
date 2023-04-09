import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data, error } = supabase.from("todos").select().eq("id", id).single();
        console.log("🚀 | file: Update.jsx:17 | data:", data)
        // setTitle(data.title);
        // setDescription(data.description);
        // setCompleted(data.completed);
      } catch (error) {
        console.error(error);
        navigate("/", { replace: true });
      }
    };
    fetchTodo();
  }, [id, navigate]);

  return <div>{id}</div>;
}
