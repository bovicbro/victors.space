import {createStore,combineReducers} from "redux";
import mathReducer from "./reducers/mathReducer"
import nameReducer from "./reducers/nameReducer"

export default createStore(
    combineReducers({
      mathReducer: mathReducer,
      nameReducer: nameReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
