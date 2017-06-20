import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ADD_POST } from './reducers';

const _Reddit = (props) => (
  <View>
    {this.props.posts.map(post => <Text>{post.name}</Text>)}
    <TouchableOpacity>
      <Text>Add</Text>
    </TouchableOpacity>
  </View>
)

const mapStateToProps = (state) => ({
  posts: state.reddit
})

const mapActionsToProps = (dispatch) => ({
  addRedditPost(post={name: 'new post'}) => {
    dispatch({type: ADD_POST, payload: post})
  }
})

export const Reddit = connect(mapStateToProps, mapActionsToProps)(_Reddit)
