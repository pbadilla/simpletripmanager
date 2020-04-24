import React, { Suspense, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

import Banner from '../component/Banner';
import LoadingBanner from '../component/LoadingBanner';
import LoadingComponent from '../component/LoadingComponent';

import { driverNameProvider } from '../context/driverNameContext';

import { Layout, Container, Header, Body, Content, Footer, Sidebar } from './styles';

const CardBoxesLazy = React.lazy(() => import('../component/CardBoxes'));
const MapGoogleLazy = React.lazy(() => import('../component/MapGoogle'));

const Home = () => {
  const [driverNameBanner, setDriverNameBanner] = useState('Driver Name');
  return (
    <Layout>
      <Container>
        <Header>
          <h1><img src="/images/Logo_Small.png" title="Simple Trip Manager v.1.0" /> v.1.0</h1>
          <driverNameProvider value={{ driverNameBanner, setDriverNameBanner }}>
            <Banner />
          </driverNameProvider>
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
  )
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Home);