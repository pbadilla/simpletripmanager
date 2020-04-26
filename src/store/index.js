import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import trips from "./reducers/tripsReducer";
import selectedTrip from './reducers/selectedReducer';
import pointsTrip from './reducers/pointsReducer';
import stopTrip from './reducers/stopsReducers';

const rootReducer = combineReducers({ trips, pointsTrip, stopTrip, selectedTrip });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
