import React from 'react';
import LoginForm from '../components/LoginForm'
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
 
export default class HomeScreen extends React.Component{
 
  render() {
    return (
      <ScrollView style={{padding: 20, paddingTop: 30}}>
        <LoginForm/>
      </ScrollView>

    );
  } 
}
 
var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});