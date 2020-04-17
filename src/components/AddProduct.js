/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Flex, FormField, Label, Icon, Input, Select } from 'pcln-design-system';

const AddProduct = () => (
  <Flex>
    <Box width={1} mb={2}>
      <FormField>
        <Label htmlFor="productName">Product name:</Label>
        <Icon name="Fridge" size="20" />
        <Input
          id="productName"
          name="productName"
          defaultValue=""
          placeholder="Insert name of the product"
        />
      </FormField>
    </Box>
    <Box width={1}>
      <FormField>
        <Label htmlFor="category">Category</Label>
        <Select id="category" name="category" defaultValue="">
          <option>Informático</option>
          <option>Fungible</option>
          <option>Amortizable</option>
          <option>Estructural</option>
          <option>Otros</option>
        </Select>
      </FormField>
    </Box>
  </Flex>
);

export default AddProduct;
