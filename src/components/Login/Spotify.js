// Spotify takes care of user authentication part on its own.
// (clicking login page it redirects to spotify authorization )
export const authEndpoint = process.env.REACT_APP_AUTH_END_POINT

// And this is the redirect url developers provide in spotify developers.  To redirect back to our localhost where app is running.
const redirectUri = process.env.REACT_APP_REDIRECT_URL

//Client id is got from spotify developers.
const clientId = process.env.REACT_APP_CLIENT_ID

//Users scopes provide the different read only features of spotify.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash //This returns to the point we had "/", that is localhost
    .substring(1) //chopping string. and make to substring.
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]); //go to initial array, decode the uri and return initial
      return initial;
    }, {});
  //this empty object, is how initial should start with.
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
//This login url will be displayed in the url when we're in authorization page.
//login url is using the endpoint of spotify, the user is send to that end point.
// and see if there is a client id, if there is, it accepts it and redirect uri.
// and scope is also checked. and then join with a ASCII space character. and response type is given to a token.
// if everything is ok user got backs a token. and then it gives back a prompt that is dialogue = true.
// if dialogue false, that pop up when hitting login wont come.
