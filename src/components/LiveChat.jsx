import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateName, generateString } from "../utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.messages);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addChat({
      name: "Rohit Mourya",
      description: liveMsg
    }))
    setLiveMsg("")
  };
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addChat({
          name: generateName(),
          description: generateString(20),
        }),
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="border w-full mt-5 p-2 h-165 overflow-y-scroll flex flex-col-reverse">
        {chatData?.map((chat, index) => (
          <ChatMessage
            key={index}
            name={chat.name}
            description={chat.description}
          />
        ))}
      </div>
      <form className="border p-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 border w-10/12 rounded mr-2"
          placeholder="Enter Message"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="bg-gray-200 p-2 rounded font-bold">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
