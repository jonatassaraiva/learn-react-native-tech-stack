import React, { Component } from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { Header } from './component/common';
import LibraryList from './component/library-list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header text="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
