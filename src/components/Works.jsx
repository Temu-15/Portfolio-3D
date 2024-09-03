import React from "react";
import { Avatar } from "@mui/material";
import CardList from "./CardList";
// import "./styles.css";

const Works = () => {
  return (
    <div className="relative w-full h-full px-[9%]">
      <header>
        <span className="date">Tuesday, August 13th</span>
        <h1>Today</h1>
        <div className="avatar">
          <Avatar />
        </div>
      </header>
      <CardList />
    </div>
  );
};

export default Works;
