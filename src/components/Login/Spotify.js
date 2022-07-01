export const authEndpoint = "https://accounts.spotify.com/authorize"; //This is what spotify does it take care of authentication and playlist of different users. (clicking login page it redirects to spotify authorization )

const redirectUri = "http://localhost:3000/"; // And this is the redirect url we gave in spotify developers, To redirect back to our localhost where app is running. (ones authorozed take back to localhost)
const clientId = "bc7a759ec9424c8a94be098c7be3b077"; //Client id is got from spotify developers
//ok this is users scopes. people has read access to songs. like it can be played, view recent played, playback state, modify it.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
//what all can be done in spotify.

export const getTokenFromUrl = () => {
  //The response got from token is taken
  return window.location.hash //returns to the poi nt we had "/", that is localhost
    .substring(1) //chopping string. and make to substring.
    .split("&")
    .reduce((initial, item) => {
      //reduce in array method, initial value of reduce and item.
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]); //go to initial array, decode the uri and return initial

      return initial;
    }, {}); //this empty object, is how initial should start with.
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
//This login url will be displayed as url in localhost when we press login  button.
//loginurl is using the endpoint of spotify, the user is send to that end point. and see if there is a client id, if there is it accepts it and redirect uri it accepts it. and scope also checks. and then join with a aASCII space character. and response type is given to a token, what that is doing is, if everything is ok user got backs a token. and then it gives back a prompt that is dialogue= true. if dialogue false, that pop up when hitting login wont come.
