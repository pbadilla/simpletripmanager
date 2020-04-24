import { SELECTED_TRIP } from "../actions/actionTypes";

const initialState = null;

export default function pointsTrip(state = initialState, action) {

  switch (action.type) {
    case SELECTED_TRIP:
      return action.payload ;
    default:
      return state;
  }
}

