import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
  <Provider state={store} >
  <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

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
