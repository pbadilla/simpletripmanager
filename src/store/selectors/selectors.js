import get from 'lodash/get';
import { createSelector } from 'reselect';

export const getStops = state => get(state, ['pointsTrip', 'stop']);

// export const getStop = state => state.stop;

export const getPoints = state => state.pointsTrip;

export const getSelected = state => state.selected;

export const getTrips = state => state.trips;


export const getTravel = createSelector([getTrips], (
  { startPoints, stops, endPoints }
) => ({
  startPoints,
  stops,
  endPoints,
}));
