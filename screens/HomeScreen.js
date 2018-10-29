import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.pageTitle}>Add Todo</Text>
        </View>
        <View style={{flex: 5, backgroundColor: 'skyblue'}} >

        <View style ={styles.btnContainer}>
        <Button 
          onPress={() => {
            Alert.alert('Adding Todo!');
          }}
          title="+"
        /></View>

        </View>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 15,
  },
  btnContainer: {
    width: 40,  
    height: 40,                                                   
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,  
  },
});