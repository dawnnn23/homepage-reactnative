import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class  App extends Component {
  render() {
    return(
      <View style={styles.container}>
      <StatusBar backgroundColor="#696969" barStyle="light-content" />
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
