import React, { useContext, useRef, useState } from "react";
import "./Main.css";
import MusicFooter from "./MusicFooter";

import { GlobalContext } from "../context/GlobalState";

function Video({ Name, URL }) {
  const {
    playing,
    togglePlaying,
  } = useContext(GlobalContext);

  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleAudio = () =>
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();

  const handleProgress = (e) => {
    let resultTime = (e.target.value / 100) * duration;
    setCurrentTime(resultTime);
    videoRef.current.currentTime = resultTime;
  };

  const handleEnd = () => {
    if (playing) togglePlaying();
    videoRef.current.currentTime = 0;
  };
  return (
    <div>
      
      <div className="video-page">
        <h2 className="video-title">{Name}</h2>
        <video
          className="video-player"
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onCanPlay={(e) => setDuration(e.target.duration)}
          onEnded={handleEnd}
          ref={videoRef}
          src={URL}
          controls controlsList="nodownload"
        />
      </div>
      
      <MusicFooter
        displayControl={true}
        handleProgress={handleProgress}
        toggleAudio={toggleAudio}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
  );
}

export default Video;
