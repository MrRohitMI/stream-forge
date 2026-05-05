import React from "react";
import hamburgerIcon from "../assets/hamburger.png";
import youtubeIcon from "../assets/youtube.png";
import userIcon from "../assets/user-icon.jpeg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Navbar = () => {
    const dispatch = useDispatch()
    const handleMenuToggle = () => {
        dispatch(toggleMenu())
    }
  return (
    <nav className="grid grid-flow-col items-center p-4 shadow-lg">
      <div className="flex col-span-1 gap-2 items-center">
        <img src={hamburgerIcon} alt="hambuger-icon" className="w-10 h-10" onClick={handleMenuToggle}/>
        <img src={youtubeIcon} alt="youtube-icon" className="w-26 h-12" />
      </div>
      <div className="col-span-10 m-auto">
        <input
          type="search"
          placeholder="Search"
          className="border border-gray-300 w-140 h-10 rounded-l-full px-4"
        />
        <button className="bg-gray-300 h-10 px-3 rounded-r-full">Search</button>
      </div>
      <div className="col-span-1 flex justify-end">
        <img src={userIcon} alt="userIcon" className="w-12 ml-14" />
      </div>
    </nav>
  );
};

export default Navbar;
