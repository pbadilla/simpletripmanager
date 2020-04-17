/* eslint-disable react/prop-types */
import React from 'react';
import { Flex, Box, Sidebar } from 'pcln-design-system';

const Page = ({ children }) => (
  <Flex>
    <Box px={3} width={1 / 4}>
      <Sidebar />
    </Box>
    <Box px={3} width={3 / 4}>
      {children}
    </Box>
  </Flex>
);

export default Page;
