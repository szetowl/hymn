import React, {useContext} from 'react'
import './Header.css'
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { GlobalContext } from "../context/GlobalState";

function Header() {
    const {homePage, toggleHomePage, playing, togglePlaying}=useContext(GlobalContext)
  
      const backHome = ()=>{
         if(!homePage) {toggleHomePage();}
         if(playing) {togglePlaying();}
      }
      return (
          <div className='header'>
              <h2>詩 歌 樂</h2>
            {!homePage &&  <button className='list-button' 
                  onClick={backHome}>
            <QueueMusicIcon className="icon-style" />
              </button>}
              
          </div>
      )
  }
  
  export default Header
  