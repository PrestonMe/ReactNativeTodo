import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    // we can pass in the method we want to use if we don't want to default to get
    // fetch({
    //   method: 'get',
    //   headers: {
    //
    //   }
    // }'https://www.reddit.com/.json', {
    //   Accept: 'application/json'
    // })
    // get request, just passing in  a url defaults to a get request
    fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    })
    // res.json returns a promise
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
