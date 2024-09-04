import React from "react";
import { Avatar } from "@mui/material";
import CardList from "./CardList";
// import "./styles.css";

const Works = () => {
  return (
    <div className="relative w-full h-full px-[9%]">
      <header>
        <span className="date"></span>
        <h1>Previous workd</h1>
        <div className="avatar">
          <Avatar />
        </div>
      </header>
      <CardList />
    </div>
  );
};

export default Works;
