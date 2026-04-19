import React from "react";
import ProfileCard from "./components/profileCard";
import ProjectCard from "./components/projectCard"
import Vite from "../src/assets/vite.svg"
import HeroReact from "../src/assets/react.svg"

function App() {
  return (
    <>
     <ProjectCard/>
      <div className="gap-y-5 flex flex-col">
        <ProfileCard image={Vite} name="Brian" role="front-end Dev"/>
        <ProfileCard image={HeroReact} name="john" role="Designer"/>
      </div>
     
    </>
  );
}
export default App;
