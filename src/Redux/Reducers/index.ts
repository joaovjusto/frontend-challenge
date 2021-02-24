// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import AuthReducer from "./auth";
// #endregion Local Imports

export default combineReducers({
    home: HomeReducer,
    auth: AuthReducer,
});
