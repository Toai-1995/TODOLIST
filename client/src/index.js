import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import jwt from "jsonwebtoken";
import axios from 'axios'

import store from './store/store';


var token = localStorage.getItem('token');
if (token) {
  const data = jwt.decode(token);
  //console.log(data)
  const now = new Date().getTime() / 1000; // convert to timestamp in seconds
  if (data.exp > now) {
    store.dispatch({
      type: "LOGGIN_SUCCESS", payload: token
    });
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
