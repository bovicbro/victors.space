import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore} from "redux";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


const initialState = {
  result: 1,
  history: []
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
          ...state,
          result: state.result + action.payload,
          history: [...state.lastValues, action]
      };
      break;

  }
  return state;
}

const store = createStore(
    reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 100
})

export default App;
