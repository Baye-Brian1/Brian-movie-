import React from "react";
import { useState } from "react";

const todoFormOne = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "" || input.includes(input.trim))
      return alert("Do not Repeat todos");
    setTodos([...todos, input.trim()]);
    setInput("");
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex w-full  text-center m-auto items-center flex-col">
      <div className="relative flex">
        <input
          className="p-3 border-none w-100 rounded-3xl outline-none bg-white text-black font-{18px}"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Task"
        />
        <button
          className="text-white text-center bg-black w-20 rounded-3xl absolute right-0.5 bottom-0.5 top-0.5"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          <p className="text-white text-{18px}">{todo}</p>
          <button
            className="text-black text-center px-3 py-1 bg-white w-20 rounded-3xl"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <div
        className="justify-center mt-3 text-black text-center px-1 py-2 bg-white w-40 rounded-3xl"
        onClick={() => setTodos([])}
      >
        Clear
      </div>
    </div>
  );
};

export default todoFormOne;
