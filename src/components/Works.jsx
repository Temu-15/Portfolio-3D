import React from "react";
import { Avatar } from "@mui/material";
import CardList from "./CardList";
// import "./styles.css";

const Works = () => {
  return (
    <div className="relative w-full h-full px-[9%]">
      <header className="mb-3">
        <h2 className="text-[45px] text-center lg:text-left capitalize">
          Latest <span className="text-[#915eff]">Projects</span>
        </h2>
      </header>
      <CardList />
    </div>
  );
};

export default Works;
