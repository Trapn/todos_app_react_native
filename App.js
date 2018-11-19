import React from 'react';
import { createBottomTabNavigator} from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './screens/HomeScreen.js'
import AboutScreen from './screens/AboutScreen.js'
import ProjectScreen from './screens/ProjectScreen.js'



const RootStack = createBottomTabNavigator(
  {
    Account: HomeScreen,
    Projects: ProjectScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Account',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />

  }
}


