// reducers are pure functions with no side affects, it takes a state, performs an action and returns
// a new state

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

export const reddit = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state;
    case FETCH_POSTS_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};
