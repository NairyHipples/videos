import React from "react";
import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, i) => {
    return <VideoItem key={i} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className={"ui relaxed divided list"}>{renderedList}</div>;
};
