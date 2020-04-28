/* eslint-disable */
import React, { Fragment, useEffect, Suspense } from "react";

import { connect, useDispatch } from "react-redux";
import { fetchTrips } from "../../store/actions";
import { getTrips } from '../../store/selectors/selectors';
import store from '../../store';

import Skeleton from 'react-loading-skeleton';
import Loaded from "../Loaded";

const CardBoxLazy = React.lazy(() => import('../CardBox'));

const CardBoxes = ({ isError, isLoading, fetchTrips, tripsArray }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTrips();
  }, [dispatch]);

  const tripsItems = store.getState().trips;
  
  const { trips } = tripsItems;
  
  return trips.map((trip, index) => {
    return (
      <Suspense fallback={<Loaded />}>
        <Fragment>
          <CardBoxLazy index={index} props={trip} />
        </Fragment>
      </Suspense>
    )
  });
}

const mapStateToProps = state => ({
  isError: state.isError,
  isLoading: state.isLoading,
  fetchTrips: state.trips,
  tripsArray: getTrips(state),
});

export default connect(mapStateToProps, { fetchTrips })(CardBoxes);


