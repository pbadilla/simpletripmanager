
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../store/actions';
import { fetchTrips , fetchTripsStarted } from '../store/actions';
import {
  FETCH_TRIPS_STARTED,
  FETCH_TRIPS_FAILURE,
  FETCH_TRIPS_SUCCESS
} from "../store/actions/actionTypes";
import FIXTURES from '../tests/fixtures.json';

jest.mock('axios');

test('Retrieve transaction data based on a date range', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  const mockData = { FIXTURES }

  mockAxios.post.mockResolvedValue(() =>
    Promise.resolve({ data: mockData }),
  );

  const expectedActions = [
    {
      'type': FETCH_TRIPS_SUCCESS,
      'payload': { isLoading: true }
    }
  ];

  await store.dispatch(fetchTripsStarted);

  expect(store.getState()).toEqual({});
  expect(mockAxios.post).toHaveBeenCalledTimes(0);
});