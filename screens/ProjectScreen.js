import React from 'react';
import { FlatList, ActivityIndicator, Text, View, AsyncStorage, Button, Alert  } from 'react-native';

export default class ProjectScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(

      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View>
           <Text>{item.title}, {item.description}</Text>
           <Button title="delete" 
           onPress={() => {
            this._deleteProject(item.id)
            Alert.alert('Deleted project!');
          }}
          />
          </View>
        }
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
    );
  }
}