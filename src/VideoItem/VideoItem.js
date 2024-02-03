import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./VideoItem.css";

function VideoItem({ video }) {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <div className="video-item">
      {" "}
      <h2>{video.title}</h2>
      {showPlayer && <VideoPlayer url={video.url} />}
      <div className="rdx">
        <button className="form-button" onClick={togglePlayer}>
          Play
        </button>
      </div>
    </div>
  );
}

export default VideoItem;
