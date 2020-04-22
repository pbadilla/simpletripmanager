import { POINTS_PASSED } from "./actionTypes";

const fetchTripsPoints = tripsPoints => {
  return {
    type: POINTS_PASSED,
    payload: {
      tripsPoints
    }
  };
};

export default fetchTripsPoints;
