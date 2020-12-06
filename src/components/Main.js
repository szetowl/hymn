import React, { useState, useEffect, useContext } from "react";
import { songsDB, storage } from "../firebase";
import Video from "./Video";

import { GlobalContext } from "../context/GlobalState";

import "./Main.css";

function Main() {
  const { homePage, toggleHomePage } = useContext(GlobalContext);

  const [songs, setSongs] = useState([]);
  const [currentSongName, setCurrentSongName] = useState();
  const [currentSongURL, setCurrentSongURL] = useState();

  const lengthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const wordArray=['一字','二字','三字','四字','五字','六字','七字','八字','九字','十字','十一字','十二字'];

  useEffect(() => {
    songsDB
      .collection("songs")
      .orderBy("no")
      .get()
      .then((snap) => {
        const songsArray = [];
        snap.forEach((doc) => {
          const data = doc.data();
          songsArray.push(data);
        }); //for each

        const pages = [];
        for (let i = 1; i < 12; i++) {
          const page = songsArray.filter((song) => song.name.length === i);
          pages.push(page);
        }
        setSongs(pages);
      })
      .catch((error) => console.log(error));
  }, []);

  function getSongRef(songPath) {
    let audioRef = storage.ref(songPath);
    audioRef.getDownloadURL().then((url) => {
      setCurrentSongURL(url);
    });
  }
  const SongList = ({ songNameLength }) => {
    return (
      <div className="page">
        {
          <h2 className="length-number" id={"section" + songNameLength}>
            {wordArray[songNameLength-1]}
          </h2>
        }

        <ul className="ul-list">
          {songs[songNameLength - 1] &&
            songs[songNameLength - 1].map((song, index) => {
              return (
                <li
                  className="list-item"
                  onClick={() => {
                    setCurrentSongName(song.name);
                    getSongRef(song.src);
                    toggleHomePage();
                  }}
                  key={index}
                >
                  {song.no} {song.name}
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

  const SearchButton = ({ i }) => {
    let cn = "";
    i % 2 === 0 ? (cn = "button-link-even") : (cn = "button-link-odd");

    return (
      <a className={cn} href={"#section" + i}>
        {i + 1}
      </a>
    );
  };

  return (
    <div className="main-container">
      <h1 id="section0">0</h1>

      {homePage && (
        <div className="list-page">
          <div className="length-search-container">
          <a className="button-link-even" href="#section0">1</a>
            {lengthArray.map((i, index) => {
              return (
                <span className="length-block" key={index}>
                  <SearchButton i={i} />
                </span>
              );
            })}
          </div>

          {lengthArray.map((i, index) => {
            return (
              <div key={index}>
                <SongList songNameLength={i} />
              </div>
            );
          })}
        </div>
      )}

     
      {!homePage && <Video Name={currentSongName} URL={currentSongURL} />}
    </div>
  );
}

export default Main;
