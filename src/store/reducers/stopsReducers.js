import {
  FETCH_STOPS_FAILURE,
  FETCH_STOPS_STARTED,
  FETCH_STOPS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {};

export default function stopsTrip(state = initialState, action) {
  switch (action.type) {
    case FETCH_STOPS_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_STOPS_SUCCESS:
      return {
        ...state,
        loaded: true,
        success: true,
        error: null,
        stopTrip: action.payload.stopTrips
      };
    case FETCH_STOPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

