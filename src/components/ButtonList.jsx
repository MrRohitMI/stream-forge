import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonsList = [
    "All",
    "News",
    "Music",
    "Mixes",
    "Live",
    "Cricket",
    "Movies",
    "JavaScript",
    "New",
  ];
  return (
    <div className="flex mb-5">
      {buttonsList.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
