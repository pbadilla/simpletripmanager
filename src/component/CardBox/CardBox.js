import React, { useState, useEffect, Suspense, useContext } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

import { get } from 'lodash';

import fetchTripsPoints from '../../store/actions/tripsActions';
import fetchSelectedTrip from '../../store/actions/selectTripAction';
import driverNameContext from '../../context/driverNameContext';

import Skeleton from 'react-loading-skeleton';

import { Box, Heading, Icon, Text } from 'pcln-design-system';
import { BoxCard, Status } from './styles';

const CardBox = (props, id) => {

  const { id: index } = props;
  const [isActive, setIsActive] = useState(false);
  const tripsProps = get(props, 'props');

  const { driverName, status, origin, destination, stops } = tripsProps;

  const { address: addressOrigin, point: pointOrigin } = origin;
  const { address: addressDestination, point: pointOriginDest } = destination;

  const points = useSelector(state => ({ pointOrigin, pointOriginDest, stops }));
  const selected = useSelector(state => state.selectedTrip);

  const { setDriver } = useContext(driverNameContext);

  const dispatch = useDispatch();

  function pointsOnMap() {
    dispatch((fetchTripsPoints(points)));
    dispatch((fetchSelectedTrip(index, driverName, status)));
    setDriver(driverName);
    localStorage.setItem('driverName', driverName);
    setIsActive(true);
  }

  useEffect(() => {
    selected === index ? setIsActive(true) : setIsActive(false);
  }, [ isActive, index, selected ])

  return (
    <Suspense fallback={<Skeleton />}>
      <BoxCard p={2}
        color='black'
        bg="lightOrange"
        textColor={status}
        onClick={pointsOnMap}
        isActive={isActive}
        id={index}
      >
        <Heading.h4>{driverName} {isActive && <Icon name="Cars" size='18' />} </Heading.h4>
        <Status iconColor={status} >
          <Icon
            name="Mileage" 
            color='green' />
          <Text bold>{status}</Text>
        </Status>
        <Box mb={2}>
          <Text bold>Origin:</Text><Text>{addressOrigin}</Text>
        </Box>
        <Box mb={2}>
          <Text bold>Destination:</Text>
          <Text>{addressDestination}</Text>
        </Box>
      </BoxCard>
    </Suspense>
  );
}

CardBox.propTypes = {
  props: PropTypes.instanceOf(Object),
  id: PropTypes.string,
};


export default CardBox;