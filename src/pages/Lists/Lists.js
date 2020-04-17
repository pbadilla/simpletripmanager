import React from 'react';
import { useHistory } from 'react-router-dom';

import Search from '../../components/Search';
import AddProduct from '../../components/AddProduct';
import ViewCard from '../../components/ViewCard';

import { Flex, Box, Button, Container, Divider, Icon, Link, Relative } from 'pcln-design-system';

import { Grid, Cell } from 'styled-css-grid';

// eslint-disable-next-line no-unused-vars
const Lists = props => {
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
      <Grid columns={8} rows={'minmax(auto, 30px)'}>
        <Cell width={1} height={1} middle>
          <Link href="#" onClick={returnBack}>
            <Icon name="ChevronLeft" size="35" />
          </Link>
        </Cell>
        <Cell width={7} height={1} middle>
          <h2>Lists</h2>
        </Cell>
      </Grid>

      <Divider borderColor="blue" />

      <Grid columns={3} justifyContent="space-around">
        <Cell>
          <Button
            radius={4}
            size="large"
            mr={2}
            color="primary"
            onClick={() => changeView('addProduct')}
            width="100%"
          >
            <Relative p={2}>
              <Icon name="Document" size="20" />
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
            color="primary"
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
          {' '}
          <Button radius={4} size="large" mr={2} color="primary" width="100%" disabled>
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Listados
          </Button>
        </Cell>
      </Grid>
      <Flex>
        <Box width={1} p={0} mb={2} mt={2} color="white">
          <Search />
        </Box>
      </Flex>
      <Divider borderColor="blue" />
      <Flex>
        <Container>
          <Box p={3}>{changeView()}</Box>
        </Container>
      </Flex>
    </div>
  );
};

export default Lists;
