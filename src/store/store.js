import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
    user: null,
    home: {
        things: [],
    },
};

const composition = window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : applyMiddleware(thunk);

const store = createStore(rootReducer, initialState, composition);
export default store;
