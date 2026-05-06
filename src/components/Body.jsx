import React from "react";
import Sidenav from "./Sidenav";
import Content from "./Content";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidenav /> 
      <Outlet/>
    </div>
  );
};

export default Body;
