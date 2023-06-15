import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../helper";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json?.items);
  }
  console.log(videos[0]);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
