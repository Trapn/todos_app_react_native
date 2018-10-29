import React from 'react';
import { createBottomTabNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './screens/HomeScreen.js'
import AboutScreen from './screens/AboutScreen.js'

const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

