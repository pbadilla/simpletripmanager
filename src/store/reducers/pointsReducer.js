import { POINTS_PASSED } from "../actions/actionTypes";

const initialState = {
  points: {
    pointOrigin: null,
    pointOriginDest: null,
    stop: null,
  },
  origin: null,
  destination: null,
  loading: false, 
  error: null
};

export default function pointsTrip(state = initialState, action) {
  switch (action.type) {
    case POINTS_PASSED:
      return {
        points: action.payload.tripsPoints,
        // points: action.payload.tripsPoints.points,
        origin: action.payload.tripsPoints.pointOrigin,
        destination: action.payload.tripsPoints.pointOriginDest,
        stops: action.payload.tripsPoints.stops,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}
