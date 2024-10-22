import { combineReducers } from "redux";
import authReducer from "../reduces/auth-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
