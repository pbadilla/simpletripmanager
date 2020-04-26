  
import React from 'react'
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup, waitForElement, within } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import axios from 'axios';

import Home from '../pages/Home';
import store from '../store';

import FIXTURES from './fixtures.json';

jest.mock('axios');


const trips = FIXTURES;

afterEach(cleanup);

const renderComponent = () => render(
  <Provider store={store()}>
    <Home />
  </Provider>
);
