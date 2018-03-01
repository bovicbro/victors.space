import {createStore} from "redux";
import math from "./reducers/mathReducer"

export default createStore(
    math,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
