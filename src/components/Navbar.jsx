import React, { useEffect, useState } from "react";
import hamburgerIcon from "../assets/hamburger.png";
import youtubeIcon from "../assets/youtube.png";
import userIcon from "../assets/user-icon.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_KEY } from "../utils/constants";
import { storeCache } from "../utils/searchSlice";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  const getSuggestion = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${YOUTUBE_KEY}&q=${searchQuery}`,
    );
    const json = await data.json();
    setSearchData(json.items);
    dispatch(storeCache({ [searchQuery]: json.items }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchData(searchCache[searchQuery]);
      } else {
        getSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <nav className="grid grid-flow-col items-center p-4 shadow-lg">
      <div className="flex col-span-1 gap-2 items-center">
        <img
          src={hamburgerIcon}
          alt="hambuger-icon"
          className="w-10 h-10"
          onClick={handleMenuToggle}
        />
        <img src={youtubeIcon} alt="youtube-icon" className="w-26 h-12" />
      </div>
      <div className="col-span-10 m-auto relative">
        <input
          type="search"
          value={searchQuery}
          placeholder="Search"
          className="border border-gray-300 w-140 h-10 rounded-l-full px-4"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="bg-gray-300 h-10 px-3 rounded-r-full">Search</button>
        {showSuggestion && (
          <div className="bg-white shadow px-3 py-1 absolute w-full">
            <ul className="*:mb-2">
              {searchData?.map((search) => (
                <li>🔍︎ {search.snippet.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <img src={userIcon} alt="userIcon" className="w-12 ml-14" />
      </div>
    </nav>
  );
};

export default Navbar;
