import React from "react";
import { useState } from "react";

const HookPract = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form className="text-white text-center space-x-2 gap-2">
      <input
        type="text"
        className="bg-white text-black p-1"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        className="bg-white text-black p-1"
        value={name.lastName}
        onChange={(e) => setName({...name, lastName: e.target.value })}
      />
      <h2>Your first name is {name.firstName}</h2>
      <h2>Your last name is {name.lastName}</h2>
    </form>
  );
};
export default HookPract;
