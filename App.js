import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import Datafetching from './fetch/dataFetching';


const navigator = createStackNavigator({
  Home: { screen: Datafetching }
});

const App = createAppContainer(navigator);

export default App;


