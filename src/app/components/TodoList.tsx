'use client'
import React, {useState, useEffect} from "react";
import AddTask from "./AddTask";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              {
                todos.map((todos, index) => (
                  <td key={index}>{todos}</td>
                ))
              }
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
