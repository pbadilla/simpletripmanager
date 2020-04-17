import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';

const App = props => <div>{props.children}</div>;

App.propTypes = {
  children: PropTypes.any,
};

export default App;
