import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from './store';

import Home from "./pages/Home";

import { ThemeProvider } from 'pcln-design-system'
import GlobalStyle from './styles/styles';

const overlay = document.getElementById('overlay');

// hide loading
overlay.innerHTML = '';
overlay.classList.remove('loading');

class App extends Component {
  render() {
    return <Home></Home>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
