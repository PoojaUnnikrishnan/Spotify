import React, { useEffect, useState } from "react";
import spotifyWebApi from "spotify-web-api-js";

import "./App.css";

import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./components/Login/Spotify";
import Player from "./components/Player/Player";

const spotify = new spotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  //run code based on a condition
  //spotify take care of whole authentication
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token); //temp token
      spotify.setAccessToken(_token); //This is getting that token and giving to spotify api
      spotify.getMe().then((user) => {
        //this is to get the user at that time.
        console.log(user);
      });
    }
    console.log("I have a token", token);
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
//spotify-web-api-js is a npm package for wrapping it in app and using all functionality of spotify, a kind of api itself.
