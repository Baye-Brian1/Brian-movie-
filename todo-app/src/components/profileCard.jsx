import React from "react";

function profileCard({image,name, role}) {
  return (
    <section className="w-full m-auto justify-center items-center flex">
      <div
        className="bg-black text-white rounded-[2px] items-center text-center p-4
        w-[30%]"
      >
        <img src={image} alt="card-image" />
        <h2>{name}</h2>
        <p>{role}</p>
        <button className="bg-white text-black px-8 py-1">Follow me</button>
      </div>
    </section>
  );
}
export default profileCard;
