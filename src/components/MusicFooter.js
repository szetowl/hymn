import React, { useContext } from "react";
import Pause from "@material-ui/icons/Pause";
import PlayArrow from "@material-ui/icons/PlayArrow";
import "./MusicFooter.css";
import { GlobalContext } from "../context/GlobalState";

function MusicFooter({ handleProgress, toggleAudio, duration, currentTime }) {
  const { playing, togglePlaying } = useContext(GlobalContext);

  const formatTime = (s) => {
    return (s - (s %= 60)) / 60 + (10 < s ? ":" : ":0") + ~~s;
  };

  return (
    <div>
      <div className="footer-container">
        <button
          className="music-button"
          onClick={() => {
            toggleAudio();
            togglePlaying();
          }}
        >
          {!playing ? (
            <PlayArrow className="icon-style" />
          ) : (
            <Pause className="icon-style" />
          )}
        </button>

        <div className="progressBar">
          <span className="currentT">{formatTime(currentTime)}</span>
          <input
            name="progressBar"
            type="range"
            id="prgbar"
            value={duration ? (currentTime * 100) / duration : 0}
            onChange={handleProgress}
          />
          <span className="totalT">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}

export default MusicFooter;
