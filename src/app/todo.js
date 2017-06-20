import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import TodoForm from './todoform';
import { connect } from 'react-redux';

export class _Todo extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({newTodo: text});
  }

  handlePress() {
    this.props.createTodo(this.state.newTodo);
    this.setState({newTodo: ''})
  }

  render() {
    return (
      <View styles={styles.container}>
        <Reddit />
        <View>
          <TodoForm
            handlePress={this.handlePress.bind(this)}
            handleChange={this.handleChange.bind(this)}
            value={this.state.newTodo}
          />
          <View style={styles.todos}>
            {this.props.todos.map((todo, i) => (
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

const mapActionsToProps = (dispatch) => ({
  createTodo(toDo) {
    dispatch({type: 'CREATE_TODO', payload: todo})
  }
})

const mapStateToProps = (state) => ({
  todos: state.todos
})

// connect _Todo component to redux and attach actions to props
export const Todo = connect(null, mapActionsToProps)(_Todo);

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
