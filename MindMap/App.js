/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/Screens/HomeScreen'
import NewProjectScreen from './app/Screens/NewProjectScreen'
import SavedProjectScreen from './app/Screens/SavedProjectScreen'
import MapScreen from './app/Screens/MapScreen'
import TutorialScreen from './app/Screens/TutorialScreen'

export default class App extends React.Component {
  render() {
    return <Routes style={{backgroundColor: '#F5FCFF'}} ></Routes>
  }
}

export const Routes = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('App', () => App);
