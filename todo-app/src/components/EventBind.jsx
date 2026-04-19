import React from "react";
import Person from "./person";

const NameList = () => {
    const names=['bruce', 'anna', 'joseph']
  // const persons = [
  //   {
  //     id: 1,
  //     name: "bruce",
  //     age: 20,
  //     skill: "react",
  //   },
  //   {
  //     id: 2,
  //     name: "anna",
  //     age: 28,
  //     skill: "next",
  //   },
  //   {
  //     id: 3,
  //     name: "joseph",
  //     age: 30,
  //     skill: "view",
  //   },
  // ];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div className="text-white">{nameList}</div>;
};

export default NameList;
