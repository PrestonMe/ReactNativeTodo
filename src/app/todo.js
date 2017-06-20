// You always have to import React at the top of your file even if you don't use it
// because it is not global
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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
      <View styles={styles.container}>
        <View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              value={this.state.newTodo}
              onChangeText={this.handleChange.bind(this)}
            />
            <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.todos}>
            {this.state.todos.map((todo, i) => (
              <View style={styles.todo}>
                <Text style={styles.todoText} key={i}>{todo}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});
