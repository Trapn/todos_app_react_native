import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.pageTitle}>About</Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'skyblue'}} />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 10,
  },
});