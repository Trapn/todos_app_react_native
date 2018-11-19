import React from 'react';
import { View, Alert, Text, Button, StyleSheet, ScrollView, AsyncStorage } from 'react-native';

export default class AboutScreen extends React.Component {
    async _getProtectedProjects() {
        var TOKEN = await AsyncStorage.getItem('auth_token');
        fetch("http://vives-todoapp.herokuapp.com/projects.json", {
          method: "GET",
          headers: {
            'Authorization': TOKEN
          }
        })
        .then((response) => response.text())
        .then((response) => { 
          Alert.alert(
            "Projects:", response)
        })
        .done();
    };
  render() {
    return (
        <View style={styles.pageView}>
        <ScrollView>
          <Text style={styles.text}>
          
          </Text>
          <Button
            onPress={this._getProtectedProjects.bind(this)}
            title="Get Projects"
          />
        </ScrollView>
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
  text: {
    fontSize: 20,
  },
  pageView: {
    paddingTop: 20,
  },
});



















