import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

import CardBoxes from "../component/CardBoxes"

import MapGoogle from '../component/MapGoogle';

import { Box, Heading } from 'pcln-design-system';
import { Layout } from './styles';

const Home = () => {
  return (
    <Layout>
      <div class="container">
        <div class="header">
          <Box p={3} bg='darkBlue' color='white'>
            <Heading.h1>Simple Trip manager v.1.0</Heading.h1>
          </Box>
        </div>
        
        <div class="body">
          <div class="content">
            <CardBoxes />
          </div>
          <div class="sidebar"><MapGoogle /></div>
        </div>
        <div class="footer">
          <h4>by @pachibadilla</h4>
        </div>
      </div>
    </Layout>
  )
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Home);
