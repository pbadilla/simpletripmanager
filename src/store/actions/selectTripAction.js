import { SELECTED_TRIP } from "./actionTypes";

const fetchSelectedTrip = (selectedTrip, userNameDriver) => {
  return {
    type: SELECTED_TRIP,
    payload: {
      selectedTrip,
      userNameDriver,
    }
  };
};

export default fetchSelectedTrip;
