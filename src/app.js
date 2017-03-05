import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { firebaseSetting } from '../setting';

import { Header, Spinner } from './component/common';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp(firebaseSetting);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="Tech Stack" />
        <Spinner size="large" />
      </View>
    );
  }
}

export default App;
