import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import trips from "./reducers";
import pointsTrip from './reducers/pointsReducer';
import stopTrip from './reducers/stopsReducers';

const rootReducer = combineReducers({ trips, pointsTrip, stopTrip });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
