import React from "react";
import HeroReact from "../assets/react.svg";

const projectCard = () => {
  return (
    <div className="max-w-full p-4 bg-black min-h-screen flex items-center">
      <div className="w-[40%] border border-white/10 rounded-2xl p-1 overflow-hidden group cursor-pointer">
        <div className="relative h-48 w-full rounded-xl border border-white/5 bg-[#0a0a0a] flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `linear-gradient(#333 1px, transparent 1px),
            linear-gradient(90deg,#333 1px, transparent 1px)`,
              backgroundSize: "70px 70px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_ tarnsparent_0%,_#0a0a0a_100%)]">
            <div className="w-10 h-10 bg-black rounded-md m-auto flex items-center justify-center">
              <img src={HeroReact} alt="" />
              {/* <span className="text-white font-bold text-xl">C</span> */}
            </div>
          </div>
          <div className="mt-5 space-y-2 px-1">
            <h3 className="text-white text-xl font-semibold tracking-tight">
              Call
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Open source video/audio infrastructure for modern web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default projectCard;
