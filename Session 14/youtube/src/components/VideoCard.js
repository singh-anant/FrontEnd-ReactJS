import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow">
      <img className="rounded-lg" src={thumbnails?.high?.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

/* Higher-Order-Function- is a type of function that takes in a component and returns a component.
  takes in a component and modifies a little...
  Let say we have to differrenciate a component to get distinguihed from other..VideoCard and Ad-VideoCard */
export const redBorderVideoCard = (VideoCard) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard />
    </div>
  );
};

export default VideoCard;
