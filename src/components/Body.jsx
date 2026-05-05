import React from "react";
import Sidenav from "./Sidenav";
import Content from "./Content";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidenav /> 
      <Content />
    </div>
  );
};

export default Body;
