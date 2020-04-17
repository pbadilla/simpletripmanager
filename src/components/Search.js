/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, FormField, Label, Icon, Input, Relative } from 'pcln-design-system';

const SearchBox = () => (
  <form name="form-search">
    <Label htmlFor="search" hidden>
      Search
    </Label>
    <Icon name="Search" size="20" />
    <Input id="search" name="search" defaultValue="" placeholder="Search Product" width="100%" />
    <Button size="medium" mr={2} type="submit">
      Buscar
    </Button>
  </form>
);

export default SearchBox;
