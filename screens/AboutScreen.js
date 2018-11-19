import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, AsyncStorage } from 'react-native';

export default class AboutScreen extends React.Component {
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('auth_token');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    return (
        <View style={styles.pageView}>
        <ScrollView>
          <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget est vestibulum nisi lobortis sagittis id vitae magna. Aliquam convallis, ex vitae mattis condimentum, dolor enim dapibus urna, nec convallis tellus magna vel lorem. Nulla sit amet orci eu odio auctor commodo. Donec quis arcu euismod, ultricies ex eu, tincidunt metus. Quisque vulputate erat eget maximus gravida. Duis lectus ipsum, iaculis vel justo eget, mattis bibendum velit. Donec in tincidunt elit. Fusce tincidunt bibendum ligula, egestas vestibulum metus bibendum eu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare urna elit, ut commodo ex tincidunt nec. Aliquam semper, nisl id tempor hendrerit, ligula tortor tincidunt nulla, at congue nibh ipsum in risus. Mauris consectetur erat felis, quis volutpat erat ultrices nec. Nullam rhoncus eros tempor, malesuada nibh non, consectetur nunc. Integer quam enim, consectetur et elit eget, pretium condimentum metus. Quisque commodo lorem ac nisl mollis faucibus. Aenean odio ligula, lacinia a finibus et, pellentesque et felis. Morbi tristique lacinia finibus. Aenean aliquam pulvinar est, ac viverra ante efficitur eu. Phasellus bibendum tellus in elit egestas sollicitudin. 
          </Text>
          <Button
            onPress={this._retrieveData.bind(this)}
            title="GetToken"
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