import React, { useState } from "react";
import VideoList from "./VideoList/VideoList";
import AddVideoForm from "./AddVideoForm/AddVideoForm";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  return (
    <div>
      <h1>Video Library</h1>
      <AddVideoForm addVideo={addVideo} />
      <br />

      <VideoList videos={videos} />
    </div>
  );
}

export default App;
