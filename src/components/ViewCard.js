/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Flex, FormField, Label, Icon, Image, Input, Select, Text } from 'pcln-design-system';

const ViewCard = () => (
  <Flex>
    <Box width={1 / 2}>
      <Image
        alt="Brooklyn"
        src="https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20"
        width="300"
        height="200"
      />
    </Box>
    <Box width={1 / 2}>
      <Image
        alt="Brooklyn"
        src="https://source.unsplash.com/bITjK6W2Alw/1024x768?q=20"
        width="300"
        height="200"
      />
    </Box>
    <Box width={1}>
      <Text bold align="center">
        Product Name
      </Text>
      <Text bold align="center">
        Category
      </Text>
    </Box>
  </Flex>
);

export default ViewCard;
