import React, { useEffect, useContext, cloneElement } from 'react';
import { useSelector } from "react-redux";

import isEmpty from 'lodash/isEmpty';

import driverNameContext from '../../context/driverNameContext';

import { Heading, Icon, Flex, Box } from 'pcln-design-system';
import { Wrapper, WrapperIcon } from './styles';
import colors from '../../styles/colors';

const Banner = () => {
  const nameDriverUser = useSelector(state => (state.selectedTrip.userNameDriver));
  const statusTrip = useSelector(state => (state.selectedTrip.statusTrip));

  return (
    !isEmpty(nameDriverUser) &&
      (<Flex alignItems='center' textAlign="right" justifyContent="end">
        <WrapperIcon status={statusTrip}>
          <Icon name="Dot" size={25} />
        </WrapperIcon>
        <Box mr={2}>
          <Heading.h3>{nameDriverUser}</Heading.h3>
        </Box>
        <Icon
          name="Cars"
          color='white'
          size={25}
        />
      </Flex>)
  )
}


export default React.memo(Banner);

