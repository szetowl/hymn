export default (state, action) => {
    switch (action.type) {
      case "SET_CURRENT_SONG_URL":
        return {
          ...state,
          currentSongURL: action.data,
        };
      case "TOGGLE_PLAYING":
        return {
          ...state,
          playing: action.data, // true or false
        };
        case "TOGGLE_HOME_PAGE":
        return {
          ...state,
          homePage: action.data, // true or false
        };
        
      default:
        return state;
    }
  };
  