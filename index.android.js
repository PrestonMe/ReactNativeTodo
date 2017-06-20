import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Todo } from './src/app/Todo';
import { Fancy } from './src/app/fancy';
import { Reddit } from './src/app/reddit';
import { Main as Root } from './src/app/main';
// Provider pretty much supplies the store to our components
import { Provider } from 'react-redux';
import { store } from './src/store';

const Main = () => (
  // Now every child of todo has access to the store
  <Provider store={store}>
    <Root />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Registering our root component is like doing the render method inside of React,
// This is the react-native version of that
App.registerComponent('Todo', () => Main);
