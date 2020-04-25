import React, { Suspense, useState, useContext } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

import Banner from '../component/Banner';
import LoadingBanner from '../component/LoadingBanner';
import LoadingComponent from '../component/LoadingComponent';

import driverNameContext from '../context/driverNameContext';

import { NameDriver, Layout, Container, Header, Body, Content, Footer, Sidebar } from './styles';

const CardBoxesLazy = React.lazy(() => import('../component/CardBoxes'));
const MapGoogleLazy = React.lazy(() => import('../component/MapGoogle'));

const Home = () => {
  const { driver, setDriver } = useContext(driverNameContext);
  const value = { driver, setDriver };

  return (
    <driverNameContext.Provider value={value}>
      <Layout>
        <Container>
          <Header>
            <h1><img src="/images/Logo_Small.png" title="Simple Trip Manager v.1.0" /> v.1.0</h1>
            <NameDriver>
                <Banner />
            </NameDriver>
          </Header>
          
          <Body>
            <Content>
            <Suspense fallback={<LoadingComponent />}>
              <CardBoxesLazy />
            </Suspense>
            </Content>
            <Sidebar>
            <Suspense fallback={<LoadingBanner />}>
                <MapGoogleLazy />
            </Suspense>
            </Sidebar>
          </Body>

          <Footer>
            <h4>by @pachibadilla</h4>
          </Footer>
        </Container>
      </Layout>
    </driverNameContext.Provider>
  )
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Home);
