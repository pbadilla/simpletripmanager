import React from 'react';
import { useSelector } from "react-redux";

import isEmpty from 'lodash/isEmpty';

import { Heading, Icon, Flex, Box } from 'pcln-design-system';
import { WrapperIcon } from './styles';
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
          color={colors.white}
          size={25}
        />
      </Flex>)
  )
}


export default React.memo(Banner);

