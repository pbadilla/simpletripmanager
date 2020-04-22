import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Text } from './styles';

const Marker = ({ text=''}) => (
  <Wrapper>
    <Text>{text}</Text>
  </Wrapper>
);

export default Marker;

