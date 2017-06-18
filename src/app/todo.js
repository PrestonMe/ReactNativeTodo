// You always have to import React at the top of your file even if you don't use it
// because it is not global
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({newTodo: text});
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>Create</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => (
            <Text key={i}>{todo}</Text>
          ))}
        </View>
      </View>
    );
  }
}
