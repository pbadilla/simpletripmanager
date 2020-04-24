import React,  { useEffect, useContext } from 'react';

import driverNameContext from '../../context/driverNameContext';

import { Heading, Icon, Flex, Box } from 'pcln-design-system';
import { Wrapper } from './styles';

const Banner = () => {

  return (
    <Flex alignItems='center' textAlign="right" justifyContent="space-between">
      <Box mr={2}>
        <Heading.h3>{localStorage.getItem('driverName')}</Heading.h3>
      </Box>
     
      <Icon
        name="Cars"
        color='white'
        size={25}
      />
    </Flex>
  ) 
}


export default React.memo(Banner);

