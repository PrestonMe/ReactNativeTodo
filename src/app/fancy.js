import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
// we dont have to include android or ios in the path as react-native will pick this up for you
import { styles } from './styles';

export class Fancy extends Component {
  render() {
    <View style={styles.container}>
      <View style={styles.box}></View>
      <Text style={styles.text}>Fancy</Text>
    </View>
  }
}
