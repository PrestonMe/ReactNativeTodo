import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3]
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.intructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignTiems:
  }
})

// Registering our root component is like doing the render method inside of React,
// This is the react-native version of that
App.registerComponent('Todo', () => Todo);
