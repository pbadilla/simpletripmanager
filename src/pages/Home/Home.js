import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Divider, Icon, Relative } from 'pcln-design-system';

import { Grid, Cell } from 'styled-css-grid';

// eslint-disable-next-line no-unused-vars
const Home = props => {
  const history = useHistory();

  function handleSubmit(event, page) {
    event.preventDefault();
    history.push(`/${page}`);
  }

  return (
    <div>
      <Grid height="30px">
        <Cell middle>
          <Icon name="Home" />
          <h2>Home</h2>
        </Cell>
      </Grid>

      <Divider borderColor="blue" />
      <Grid columns={2}>
        <Cell width={1}>
          <Box width={1} mb={2}>
            <Button width="100%" radius={4} size="large" mr={2} color="primary" disabled>
              <Relative p={2}>
                <Icon name="Printer" size="20" />
              </Relative>
              Catálogo
            </Button>
          </Box>
        </Cell>
        <Cell width={1}>
          <Box width={1} mb={2}>
            <Button
              width="100%"
              radius={4}
              size="large"
              mr={2}
              color="primary"
              onClick={() => handleSubmit(event, 'product')}
            >
              <Relative p={2}>
                <Icon name="RadioPlus" size="20" />
              </Relative>
              Producto
            </Button>
          </Box>
        </Cell>

        <Cell width={1}>
          <Box width={1} mb={1}>
            <Button
              width="100%"
              radius={4}
              size="large"
              mr={2}
              color="primary"
              onClick={() => handleSubmit(event, 'card')}
            >
              <Relative p={2}>
                <Icon name="Document" size="20" />
              </Relative>
              Ficha
            </Button>
          </Box>
        </Cell>
        <Cell width={1}>
          <Box width={1} mb={1}>
            <Button
              width="100%"
              radius={4}
              size="large"
              mr={2}
              color="primary"
              onClick={() => handleSubmit(event, 'lists')}
            >
              <Relative p={2}>
                <Icon name="List" size="20" />
              </Relative>
              Listados
            </Button>
          </Box>
        </Cell>
      </Grid>
      <Divider borderColor="blue" />
    </div>
  );
};

export default Home;
