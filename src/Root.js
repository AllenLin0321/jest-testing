import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
// import reduxPromise from "redux-promise";
import reducers from "reducers/index";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ initialState = {}, children }) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(async, stateValidator))
  );
  return <Provider store={store}>{children}</Provider>;
};
