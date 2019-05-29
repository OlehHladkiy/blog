/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducer from "./reducers";

const createStoreWithMiddlewarre = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddlewarre(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
