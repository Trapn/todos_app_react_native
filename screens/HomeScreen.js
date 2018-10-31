import React from 'react';
import { View, Text, Button, StyleSheet, Alert, Form, TextInput , InputField} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      

      <View style={{paddingTop: 25}}>

      <View style={{padding: 10}}>
      <TextInput
          style={{height: 40}}
          placeholder="Project Title"
          onChangeText={(text) => this.setState({text})}
        />

        <Button 
          onPress={() => {
            

            fetch('https://vives-todoapp.herokuapp.com/projects', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: this.state.text,
              description: 'Added hardcoded from addbutton',
              user_id: 1,
            }),
            
          });
          Alert.alert('Adding Todo!');
          }}
          title="+"
        />
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
    color: '#dccddc',
  },
  btnContainer: {
    
    width: 40,  
    height: 40,                                                   
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,  
  },
});