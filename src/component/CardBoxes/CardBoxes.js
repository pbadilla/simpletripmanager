import React, { useEffect, Suspense } from "react";

import { connect, useDispatch } from "react-redux";
import { fetchTrips } from "../../store/actions";
import { getTrips } from '../../store/selectors/selectors';
import store from '../../store';

import Skeleton from 'react-loading-skeleton';

const CardBoxLazy = React.lazy(() => import('../CardBox'));

const CardBoxes = ({ isError, isLoading, fetchTrips, tripsArray }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const trips = () => dispatch(fetchTrips());
    fetchTrips();
  }, [dispatch]);

  const tripsItems = store.getState().trips;
  
  const { trips } = tripsItems;
  
  return trips.map((trip, index) => {
    return (
      <Suspense fallback={<Skeleton height="100%" color="#202020" highlightColor="#444" />}>
        <CardBoxLazy id={JSON.stringify(index)} props={trip} />
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


