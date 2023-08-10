"use client";

import { AiOutlinePlus } from "react-icons/ai";
import react, { useState } from "react";

const AddTask = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      id: count,
      name: inputValue,
    };
    setTodos([...todos, newTodo]);
    setCount(count + 1);
    setInputValue("");
  };

  return (
    <div className="w-full flex justify-center flex-col gap-4">
      <div className="flex justify-center gap-4">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={handleAddTodo} className="btn btn-primary">
          Add New Task
          <AiOutlinePlus className="ml-2" size={18} />
        </button>
      </div>
      <div className="overflow-x-auto flex flex-col">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
              {todos.map((todo, index) => (
                <tr>
                  <td key={index}>{todo.id}</td>
                  <td key={index}>{todo.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddTask;
