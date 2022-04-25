import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import persistedReducer from './_reducers/index';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const store = createStore(
  persistedReducer,
  compose(
      applyMiddleware(promiseMiddleware, ReduxThunk)
  )
);

const persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
