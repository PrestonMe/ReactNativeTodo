import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    })-
    .then(res => res.json())
    .then(data => this.setState({posts: data.data.children}))
  }

  render() {
    return(
      <View>
        {/* Fetch is like the new Ajax, that is not built into most browsers
          its a global in your application so you don't have to import it */}
        <Text>Reddit</Text>
        <View>{this.state.posts.map(post => (
          <Text>{post.data.author}</Text>
        ))}</View>
      </View>
    )
  }
}
