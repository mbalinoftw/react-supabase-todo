import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { FaEdit, FaTrash } from "react-icons/fa";
import TodoCard from "../components/TodoCard";

export default function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase.from("todos").select();

      if (error) {
        setFetchError("Error fetching todos");
        setTodos(null);
        console.error(error);
      }
      if (data) {
        setTodos(data);
        setFetchError(null);
      }
    };

    fetchTodos();
  }, []);

  return (
    <main className="bg-gray-50">
      <div className="container mx-auto p-4">
        {fetchError && <p>{fetchError}</p>}
        <div className="grid md:grid-cols-4 gap-4">
          {todos?.map(todo => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}
