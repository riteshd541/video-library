import React, { useState } from "react";
import "./AddVideoForm.css";

function AddVideoForm({ addVideo }) {
  const [videoFile, setVideoFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [videosAdded, setVideosAdded] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!videoFile || !videoTitle) {
      setErrorMessage("Please select a video file and enter a title");
      return;
    }
    if (videosAdded >= 2) {
      setErrorMessage("You can only add up to 2 videos at a time");
      return;
    }
    addVideo({
      url: URL.createObjectURL(videoFile),
      title: videoTitle,
      bookmarked: false,
    });
    setVideoFile(null);
    setVideoTitle("");
    setErrorMessage("");
    setVideosAdded(videosAdded + 1);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Enter video title"
          value={videoTitle}
          onChange={handleTitleChange}
        />
        <button className="form-button" type="submit">
          Add Video
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default AddVideoForm;
