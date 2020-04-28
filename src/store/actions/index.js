import {
  FETCH_TRIPS_STARTED,
  FETCH_TRIPS_FAILURE,
  FETCH_TRIPS_SUCCESS
} from "./actionTypes";

import axios from "axios";

export const fetchTrips = () => {
  return dispatch => {
    dispatch(fetchTripsStarted());
    axios
      .get("https://europe-west1-metropolis-fe-test.cloudfunctions.net/api/trips")
      .then(res => {
        dispatch(fetchTripsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchTripsFailed(err.message));
      });
  };
};

export const fetchTripsStarted = () => {
  return {
    type: FETCH_TRIPS_STARTED,
    payload: {
      isLoading: true
    }
  };
};

const fetchTripsSuccess = trips => {
  return {
    type: FETCH_TRIPS_SUCCESS,
    payload: {
      trips,
      isLoading: true
    }
  };
};

const fetchTripsFailed = error => {
  return {
    type: FETCH_TRIPS_FAILURE,
    payload: {
      error
    }
  };
};

