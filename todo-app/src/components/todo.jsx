import React from "react";
import { useState } from "react";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const editTodo = (index, value) => {
    setEditingIndex(index);
    setEditingValue(value);
  };
  const saveEdit = () => {
    setTodos(
      todos.map((todo, index) =>
        index === editingIndex ? editingValue : todo,
      ),
    );
    setEditingIndex(null);
    setEditingValue("");
  };

  const addTodo = () => {
    if (input.trim() === "" || todos.includes(input.trim()))
      return alert("todo repeated");
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div className="flex w-full text-center m-auto items-center flex-col">
      <div className="flex relative">
        <input
          className="p-3 border-none w-100 rounded-3xl outline-none bg-white text-black font-{18px}"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          className="text-white text-center bg-black w-20 rounded-3xl absolute right-0.5 bottom-0.5 top-0.5"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {todos.map((todo, index) => (
        <div
          className="flex w-100 justify-between gap-1 p-3 items-center"
          key={index}
        >
          <div className="flex item-center justfy-center">
            {editingIndex === index ? (
              <>
                <input
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button
                  className="text-black text-center px-3 py-1 bg-white w-20 rounded-3xl"
                  onClick={saveEdit}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p className="text-white text-{18px}">{todo}</p>
                <button
                  className="text-black text-center px-3 py-1 bg-white w-20 rounded-3xl"
                  onClick={() => editTodo(index, todo)}
                >
                  Edit
                </button>
              </>
            )}
            <button
              className="text-black text-center px-3 py-1 bg-white w-20 rounded-3xl"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <button
        className="justify-center mt-3 text-black text-center px-1 py-2 bg-white w-40 rounded-3xl"
        onClick={() => setTodos([])}
      >
        Clear All
      </button>
    </div>
  );
};
export default TodoForm;
