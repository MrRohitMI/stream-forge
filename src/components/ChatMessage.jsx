import React from "react";
import userIcon from "../assets/user-icon.jpeg";

const ChatMessage = ({ name, description }) => {
  return (
    <div className="flex items-center gap-2 shadow p-2">
      <img src={userIcon} alt="user-icon" className="w-10" />
      <div>
        <span className="font-bold mr-2">{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
