import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {logger} from "redux-logger/src";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/store";
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, applyMiddleware(logger, thunk))
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
