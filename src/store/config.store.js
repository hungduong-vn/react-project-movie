import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { cinemaReducer } from "./reducers/cinemaReducer";
import { ticketReducer } from "./reducers/ticketReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({ cinemaReducer, ticketReducer, userReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
