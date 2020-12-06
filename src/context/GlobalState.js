import React, {createContext, useReducer} from 'react'
import AppReducer from "./AppReducer";


const initialState ={
    currentSongURL:'',
    playing :false,
    homePage:true,

};

export const GlobalContext=createContext(initialState)

export const GlobalPrivder =({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setCurrentSongURL =(songURL)=> dispatch({
        type: 'SET_CURRENT_SONG_URL',
        data: songURL
    })

     // Set playing state
     const togglePlaying = () => dispatch({ 
        type: 'TOGGLE_PLAYING', 
        data: state.playing ? false : true 
    });

    // Go to Home Page
    const toggleHomePage=()=> dispatch({
        type:'TOGGLE_HOME_PAGE',
        data:state.homePage? false:true
    });
    

    return(
        <GlobalContext.Provider
        value = {{
            currentSongURL:state.currentSongURL,
            playing:state.playing,
            homePage:state.homePage,
            setCurrentSongURL,
            togglePlaying,
            toggleHomePage,
        }}>
            {children}
        </GlobalContext.Provider>

    )    
}