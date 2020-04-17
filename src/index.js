import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './modules';
import App from './pages/App';
import Login from './pages/Login';
import Home from './containers/Home';
import Product from './pages/Product';
import Lists from './pages/Lists';
import Card from './pages/Card';

import { ThemeProvider } from 'pcln-design-system';
import { GlobalStyle, MainContent } from './index.styles';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const routes = (
  <Router>
    <ThemeProvider>
      <GlobalStyle />
      <MainContent>
        <App>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/lists" component={Lists} />
          <Route path="/card" component={Card} />
        </App>
      </MainContent>
    </ThemeProvider>
  </Router>
);

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
