import React from 'react';
import { useHistory } from 'react-router-dom';

import Search from '../../components/Search';
import AddProduct from '../../components/AddProduct';
import ViewCard from '../../components/ViewCard';

import { Flex, Box, Button, Container, Divider, Icon, Link, Relative } from 'pcln-design-system';

import { Grid, Cell } from 'styled-css-grid';

// eslint-disable-next-line no-unused-vars
const Product = props => {
  const history = useHistory();

  function changeView(nameViewParam) {
    switch (nameViewParam) {
      case 'addProduct':
        return <AddProduct />;
      case 'viewCard':
        return <ViewCard />;
      default:
        return <AddProduct />;
    }
  }

  function returnBack(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <div>
      <Grid height="30px">
        <Cell width={1} height={1} middle>
          <Link href="#" onClick={returnBack}>
            <Icon name="ChevronLeft" size="35" />
          </Link>
          <h2>Product</h2>
        </Cell>
      </Grid>
      <Divider borderColor="blue" />
      <Grid columns={2} justifyContent="space-around">
        <Cell>
          <Button
            radius={4}
            size="large"
            mr={2}
            color="secondary"
            onClick={() => changeView('addProduct')}
            width="100%"
          >
            <Relative p={2}>
              <Icon name="RadioPlus" size="20" />
            </Relative>
            Añadir
          </Button>
        </Cell>
        <Cell>
          {' '}
          <Button
            radius={4}
            size="large"
            mr={2}
            color="secondary"
            width="100%"
            onClick={() => changeView('viewCard')}
          >
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Ficha
          </Button>
        </Cell>
        <Cell>
          <Button radius={4} size="large" mr={2} color="secondary" width="100%" disabled>
            <Relative p={2}>
              <Icon name="List" size="20" />
            </Relative>
            Listados
          </Button>
        </Cell>
      </Grid>
      <Divider borderColor="blue" />
      <Grid columns={1}>
        <Cell>
          <Box p={3}>
            <Search />
          </Box>
        </Cell>
      </Grid>
      <Divider borderColor="blue" />
      <Flex>
        <Container>
          <Box p={3}>{changeView()}</Box>
        </Container>
      </Flex>
    </div>
  );
};

export default Product;
