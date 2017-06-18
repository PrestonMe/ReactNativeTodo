import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3],
      newTodo: ''
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({newTodo: value})
  }

  handlePress() {

  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} onChange={this.handleChange.bind(this)} />
        {/* we can use touchablehighlight like a button/ we use onpress since there is no clicks
          on mobile devices*/}
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Tap Me</Text>
        </TouchableHighlight>
        {this.state.todos.map(todo => <Text>{todo}</Text>)}
      </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.intructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Shake or press menu button for
      //   </Text>
      // </View>
    );
  }
};

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
App.registerComponent('Todo', () => Todo);
