"use client"

import { AiOutlinePlus } from "react-icons/ai";
import react, { useState } from "react";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todo);
  const handleAddTodo = () => {
    setTodos(prev => [...prev])
  }

  return (
    <div className="w-full flex justify-center gap-4">
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-primary">
        Add New Task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
    </div>
  );
};

export default AddTask;
