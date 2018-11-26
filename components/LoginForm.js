import React from 'react';

import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';
 
var STORAGE_KEY = 'auth_token';

export default class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: '',
                  email: ''};
  };
    async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
};
  async _userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      Alert.alert("Logout Success!")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };
   _userLogin() { 
      fetch("http://vives-todoapp.herokuapp.com/authenticate", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email, 
          password: this.state.password, 
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        this._onValueChange(STORAGE_KEY, responseData.auth_token)
      if (responseData.auth_token){
        Alert.alert("Logged in")
      } else {
        Alert.alert("Failed to log in")
      }
      })
      .done();
    };  

  render() {
    return (
      <View>
      <Text>
          Login
      </Text>
      <TextInput 
      style={{fontSize: 20, paddingBottom: 3}}
      placeholder='Username' 
      value={this.state.email} 
      onChangeText={(text) => this.setState({ email: text })} />
      <TextInput 
      secureTextEntry={true}
      style={{fontSize: 20, paddingBottom: 3}}
      placeholder='Password' 
      value={this.state.password} 
      onChangeText={(text) => this.setState({ password: text })} />
      <View style={{margin:7}} />
      <View style={{margin:7}}>
      <Button 
            onPress={this._userLogin.bind(this)}
            title="Login"
          />
        </View>
        <View style={{margin:7}}>
            <Button
            onPress={this._userLogout.bind(this)}
            title="Log out"
          />
          </View>
      </View>

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
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});