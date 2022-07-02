import React, { useEffect } from "react";
import spotifyWebApi from "spotify-web-api-js";

import "./App.css";

import { useStateValue } from "./StateProvider";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./components/Login/Spotify";
import Player from "./components/Player/Player";
//spotify-web-api package gives a functionality of api.
const spotify = new spotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue(); //to use anything from data layer we have to use it like this inside an object.
  //run code based on a condition
  //spotify take care of whole authentication
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log(_token);

      spotify.setAccessToken(_token); //This gets the  token and giving to spotify api
      spotify.getMe().then((user) => {
        //if it could identify the user it will get that user and dispatch the action that is set user to the data layer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        //Here user playlist is pulled from spotifuy and when the promise is returned its stored to data layer
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcCMGAdRxrqKd").then((response) => {
        // This is a key from real spotify discover weekly Id
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
  //passing spotify as prop to player component.
}

export default App;
