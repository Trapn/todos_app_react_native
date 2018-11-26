import React from 'react';
import { FlatList, TextInput, ScrollView, StyleSheet ,ActivityIndicator, Text, View, AsyncStorage, Button, Alert  } from 'react-native';
import LoginForm from '../components/LoginForm'

export default class ProjectScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
                  title: '',
                  description: ''}
  }

  async _deleteProject(project_id){
    var TOKEN = await AsyncStorage.getItem('auth_token');
    fetch('http://vives-todoapp.herokuapp.com/projects/'+ project_id, {
  method: 'DELETE',
  headers: {
    'Authorization': TOKEN
  },
  body: JSON.stringify({
  }),
})
.done();
}

async _addProject(){
  var TOKEN = await AsyncStorage.getItem('auth_token');
  fetch('http://vives-todoapp.herokuapp.com/projects/', {
method: 'POST',
headers: {
  Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': TOKEN
},
body: JSON.stringify({
  title: this.state.title,
  description: this.state.description,
  user_id: 1,
  
}),
})
.done();
}

  async _getProtectedProjects() {
    var TOKEN = await AsyncStorage.getItem('auth_token');
    fetch("http://vives-todoapp.herokuapp.com/projects.json", {
      method: "GET",
      headers: {
        'Authorization': TOKEN
      }
    })
    .then((response) => response.json())
    .then((responseJson) => { 
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
    })
    .done();
  };

  componentDidMount(){
    this._getProtectedProjects()
  }
  componentDidUpdate(){
      
    this._getProtectedProjects()
      
  }
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1}}>
        <ScrollView>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View>
           <Text>{item.title}, {item.description}</Text>
           <Button title="delete" 
           onPress={() => {
            this._deleteProject(item.id)
            Alert.alert('Deleted project!');
            this.componentDidUpdate()
          }}
          />
          </View>
        }
          keyExtractor={({id}, index) => id.toString()}
        />
        </ScrollView>
 
               <View >
               <TextInput 
               style={{fontSize: 20, paddingBottom: 3}}
               placeholder='Projecttitle' 
               value={this.state.title} 
               onChangeText={(text) => this.setState({ title: text })} />
               <TextInput 
               style={{fontSize: 20, paddingBottom: 3}}
               placeholder='Description' 
               value={this.state.description} 
               onChangeText={(text) => this.setState({ description: text })} />
                  <Button title="add project" 
                    onPress={() => {
                     this._addProject();
                     Alert.alert('Added project!');
                     this.componentDidUpdate()
                   }}
                   />
                </View>
          </View>
    );
  }
}

var styles = StyleSheet.create({
  bottomView:{

    position: 'absolute',
    bottom: 0
  },
});

