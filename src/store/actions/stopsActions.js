import {
  FETCH_STOPS_FAILURE,
  FETCH_STOPS_STARTED,
  FETCH_STOPS_SUCCESS
} from "./actionTypes";

import axios from "axios";

const fetchStops = id => {
  return dispatch => {
    dispatch(fetchStopsStarted());

    axios
      .get(`https://europe-west1-metropolis-fe-test.cloudfunctions.net/api/stops/${id}`)
      .then(res => {
        dispatch(fetchStopsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchStopsFailed(err.message));
      });
  };
};

const fetchStopsStarted = () => {
  return {
    type: FETCH_STOPS_STARTED,
    payload: {
      isLoading: true
    }
  };
};

const fetchStopsSuccess = stopTrips => {
  return {
    type: FETCH_STOPS_SUCCESS,
    payload: {
      stopTrips
    }
  };
};

const fetchStopsFailed = error => {
  return {
    type: FETCH_STOPS_FAILURE,
    payload: {
      error
    }
  };
};
export default fetchStops;