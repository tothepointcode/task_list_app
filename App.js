import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Navigation imports
import 'react-native-gesture-handler';
import Root from './navigators/root';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Root />
      </Provider>
      
    );
  }
}
