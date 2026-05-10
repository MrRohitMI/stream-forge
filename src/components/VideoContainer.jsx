import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState(null);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideoList(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  if (videoList == null) return;
  return (
    <div className="flex flex-wrap gap-3">
      {videoList?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
