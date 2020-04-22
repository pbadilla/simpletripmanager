import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import fetchTripsPoints from '../../store/actions/tripsActions';
import { get } from 'lodash';

import { Box, Heading, Icon, Text } from 'pcln-design-system';
import { BoxCard, Status } from './styles';

const CardBox = (props) => {

  const [isActive, setIsActive] = useState(false);

  const tripsProps = get(props, 'props');

  const { driverName, status, origin, destination, stops } = tripsProps;

  const { address: addressOrigin, point: pointOrigin } = origin;
  const { address: addressDestination, point: pointOriginDest } = destination;

  const points = useSelector(state => ({ pointOrigin, pointOriginDest, stops }));
  const dispatch = useDispatch();

  function pointsOnMap() {
    dispatch((fetchTripsPoints(points)));
    setIsActive(true);
  }

  return (
    <BoxCard p={2}
      color='black'
      bg="lightOrange"
      textColor={status}
      onClick={pointsOnMap}
      isActive={isActive}
      id={driverName}
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
  );
}

CardBox.propTypes = {
  props: PropTypes.instanceOf(Object),
};


export default CardBox;
