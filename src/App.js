import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import { store } from './redux/configStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
