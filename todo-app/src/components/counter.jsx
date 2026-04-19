import React from "react";
import { useState } from "react";

const counter = () => {
  const initialValue = 0
  const [count, setCount] = useState(initialValue)
  return (
    <div className="text-white text-center items-center">
      <p>Click {count} times</p>
      <div className="flex p-2 space-x-2">
        <button
          className="bg-white text-black py-1 cursor-pointer px-8"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-white text-black py-1 cursor-pointer px-8"
          onClick={() => setCount(initialValue)}
        >
          Reset
        </button>
        <button
          className="bg-white text-black py-1 cursor-pointer px-8"
          onClick={() => setCount(count -1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
export default counter;
