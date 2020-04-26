import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import trips from "../store/reducers/tripsReducer";
import * as actions from '../store/actions';
import * as actionTypes from "../store/actions/actionTypes";

import FIXTURES from './fixtures.json';

const render = (initialStore = {}) => {
  const store = createStore(trips, initialStore, applyMiddleware(thunk));

  const Providers = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Providers, ...options });
};

const initialState = {
    "error": null,
    "loading": false,
    "trips": [],
}

// export const FETCH_TRIPS_FAILURE = "FETCH_TRIPS_FAILURE";

describe('TRIPS REDUCERS', () => {

  xtest("SHOULD return the initial state of TRIPS object", () => {
    expect(trips(undefined, {})).toEqual(initialState);
  });

  xtest("should handle FETCH_TRIPS_STARTED", () => {
    expect(
      trips(undefined, {
        type: actionTypes.FETCH_TRIPS_STARTED
      })
    ).toEqual({
      "error": null,
      "loading": true,
      "trips": [],
    });
  });


  test('should handle FETCH_TRIPS_SUCCESS', () => {
    const trips = FIXTURES;
    const expectedAction = {
      type: actionTypes.FETCH_TRIPS_SUCCESS,
      trips
    }
    expect(actions.fetchTripsSuccess(trips)).toEqual()
  });



});
