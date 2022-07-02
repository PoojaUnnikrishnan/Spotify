//initial states is an object which takes the initial states
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  //Remove after finish developing
  //   token:
  // "BQCXP9n2xXfbqlmciaD6BlHpqNAs7nDvrYgsCgmdBxV6V4XD63iXcpQolhTdQNzg-_zYQRZuqLsSVzX25e8I88_n1s9j6iGqObZtH3H9P-Ckxp52ziF6MDXNSHdIe9HECMyxbl_z49SS4_Nq7TOdUK3OJpdmo5gZn3BkL77XTs0ku-FMG2Mox0DWHnPCkqXEaqCiD3JXMvuV-ZD_",
};
//reduces takes state and action, action is the ation performed
const reducer = (state, action) => {
  console.log(action);
  //The user will diapatch actions in ui, so reducer is what listens to action and performs the operation of updating states.
  switch (action.type) {
    //now an action is dispatched and its type will have the type of action and payload contains extra information about the action.
    case "SET_USER":
      return {
        ...state, //takes in whatver is there in current state.
        user: action.user, //update userSlice with whatever user action is.
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};
export default reducer;
