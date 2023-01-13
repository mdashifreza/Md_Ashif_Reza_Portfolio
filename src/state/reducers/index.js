import { combineReducers } from "redux";
import updateDarkMode from "./darkModeReducer";
// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore
const reducers = combineReducers({
  darkMode: updateDarkMode
});

export default reducers;
