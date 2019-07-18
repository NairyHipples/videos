import "./VideoItem.css";
import React from "react";

export default ({ video, onVideoSelect }) => {
  const { snippet } = video;

  return (
    <div className={"item videoItem"} onClick={() => onVideoSelect(video)}>
      <img
        className={"ui image"}
        src={snippet.thumbnails.default.url}
        alt={snippet.title}
      />
      <div className={"content"}>
        <h4 className={"header"}>{snippet.title}</h4>
        <p className={"description"}>{snippet.description}</p>
      </div>
    </div>
  );
};
