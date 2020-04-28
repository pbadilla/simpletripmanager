import {
  FETCH_TRIPS_STARTED,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  trips: [],
  loading: false,
  error: null
};

export default function trips(state = initialState, action) {
  switch (action.type) {
   
    case FETCH_TRIPS_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        trips: action.payload.trips
      };
    case FETCH_TRIPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
