import React, { Component } from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import { Header } from './component/common';
import LibraryList from './component/library-list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.store = store.configure();
  }

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <Header text="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;