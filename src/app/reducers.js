// reducers are pure functions with no side affects, it takes a state, performs an action and returns
// a new state
import { combineReducers } from 'redux';

export const ADD_POST = 'ADD_POST';

export const reddit = (state = [
  {name: 'demo'},
  {name: 'hello'}
], action) => {
  switch (action.type) {
    case ADD_POST:
    return [
      action.payload,
      ...state
    ];
    default:
      return state;
  }
};

export const reducer = combineReducers({reddit, data});
