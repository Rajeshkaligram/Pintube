import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import PersonalScreen from '../screens/PersonalScreen';
import BusinessScreen from '../screens/BusinessScreen';
import NewsScreen from '../screens/NewsScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="Personal" component={PersonalScreen} />
      <TabTop.Screen name="Business" component={BusinessScreen} />
      <TabTop.Screen name="News" component={NewsScreen} />
    </TabTop.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={TopTab} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
