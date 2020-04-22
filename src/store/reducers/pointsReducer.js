import { POINTS_PASSED } from "../actions/actionTypes";

const initialState = {
  points: {
    pointOrigin: { lat: 30.567816, lng: 114.0201949 },
    pointOriginDest: { lat: 30.567816, lng: 114.0201949 }
  },
  loading: false,
  error: null
};

export default function pointsTrip(state = initialState, action) {
  switch (action.type) {
    case POINTS_PASSED:
      return {
        points: action.payload.tripsPoints,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export const getPoints = state => state.points;

