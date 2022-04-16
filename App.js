import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import FlatListScreen from './components/FlatListScreen';
import SectionListScreen from './components/SectionListScreen';
import ScrollViewScreen from './components/ScrollViewScreen';

// const Tab = createBottomTabNavigator();
const Tab=createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='ScrollView' component={ScrollViewScreen} />
          <Tab.Screen name='FlatList' component={FlatListScreen} />
          <Tab.Screen name='SectionList' component={SectionListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
