import {createStore,combineReducers} from "redux";
import mathReducer from "./reducers/mathReducer"
import nameReducer from "./reducers/nameReducer"
import personReducer from "./reducers/personReducer"

export default createStore(
    combineReducers({
      math: mathReducer,
      name: nameReducer,
      person: personReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
