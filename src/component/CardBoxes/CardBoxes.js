import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchTrips } from "../../store/actions";
import { getTrips } from '../../store/reducers';
import store from '../../store';

import CardBox from '../CardBox';

const CardBoxes = ({ isError, isLoading, fetchTrips, tripsArray }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    const trips = () => dispatch(fetchTrips());
    fetchTrips();
  }, [dispatch]);

  const tripsItems = store.getState().trips;
  const { trips } = tripsItems;
  
  return trips.map(trip => <CardBox id="cardBoc" props={ trip } /> );
}

const mapStateToProps = state => ({
  isError: state.isError,
  isLoading: state.isLoading,
  fetchTrips: state.trips,
  tripsArray: getTrips(state),
});

export default connect(mapStateToProps, { fetchTrips })(CardBoxes);


