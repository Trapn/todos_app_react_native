import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }  
}