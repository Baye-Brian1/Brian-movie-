import React from "react";

const Person = ({person}) => {
  return (
    <div>
      <h2>
        I am {person.name} and I'm {person.age}. I'm Skilled in {person.skill}
      </h2>
    </div>
  );
}; 

export default Person;
