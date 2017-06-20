import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Todo } from './src/app/Todo';
import { Fancy } from './src/app/fancy';


// const Main = () => (<Todo />);
const Main = () => (<Fancy />);
// since this is just returning todo we can write the above instead

// class Main extends Component {
//   render() {
//     return(
//       <Todo />
//     );
//   }
// };

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
