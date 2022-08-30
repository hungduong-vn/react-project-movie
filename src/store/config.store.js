import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { cinemaReducer } from "./reducers/cinemaReducer";
import { ticketReducer } from "./reducers/ticketReducer";

const rootReducer = combineReducers({ cinemaReducer, ticketReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
