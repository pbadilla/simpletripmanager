  
import React from 'react'
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup, waitForElement, within, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import axios from 'axios';

import Home from '../pages/Home';
import store from '../store';

import FIXTURES from './fixtures.json';

jest.mock('axios');


const trips = FIXTURES;

afterEach(cleanup);

const renderComponent = ({children}) => render(
  <Provider store={store}>
    {children}
  </Provider>
);


describe('should LOAD DATA from endpoint', () => {
  test('render LOADING STATE followed by TRIPS', async () => {
    axios.get.mockReturnValue(new Promise(resolve => resolve(trips)));
    const { getByTestId, container} = renderComponent(<Home />);
    
    const element = screen.getByTestId('Banner');

    expect(element).toBeInTheDocument();
  });

});