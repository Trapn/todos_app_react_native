import React from 'react';
import { FlatList, ActivityIndicator, Text, View, AsyncStorage  } from 'react-native';



export default class ProjectScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
                  dataSource: {'title': 'noProject',
                               'description': 'noDescription'}}
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
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.description}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}