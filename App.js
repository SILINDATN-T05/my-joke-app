import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
// import { TabNavigator, TabBarBottom, createBottomTabNavigator } from 'react-navigation';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import rootReducer from './reducers/index';
import getcategories from './reducers/reducer';
import CategoryList from './components/CategoryList';
import RandomJoke from './components/RandomJoke';
const client = axios.create({
  baseURL: 'https://api.chucknorris.io',
  responseType: 'json'
});

const store = createStore(getcategories, applyMiddleware(axiosMiddleware(client)));

const RootStack = createStackNavigator(
  {
    Home: CategoryList,
    Random: RandomJoke,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#841584',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
          <RootStack />
       </Provider>
    );
  }
}