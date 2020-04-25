import { SELECTED_TRIP } from "./actionTypes";

const fetchSelectedTrip = (selectedTrip, userNameDriver, statusTrip) => {
  return {
    type: SELECTED_TRIP,
    payload: {
      selectedTrip,
      userNameDriver,
      statusTrip,
    }
  };
};

export default fetchSelectedTrip;
