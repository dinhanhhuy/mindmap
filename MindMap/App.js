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
import HomeScreen from './app/Screens/HomeScreen'
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <Routes ></Routes>
  }
}

export const Routes = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('App', () => App);
