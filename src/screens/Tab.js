/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './ProfileScreen';
import HomePage from './HomeScreen';
import Home from './Home';
import LeavesScreen from './Leaves';
import CollegeFeeScreen from './CollegeFee';
import AttendanceScreen from './Attendance';
    
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
 
 

 

 

 

const TabNavigator = () => {
  return (
    <Tab.Navigator
 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Leaves') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === 'CollegeFee') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Attendance') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#007bff', // Active tab color
        inactiveTintColor: 'gray', // Inactive tab color
      }}
    >
      <Tab.Screen name="Home" component={Home} options={navOptionHandler}/>
      <Tab.Screen name="Leaves" component={LeavesScreen}   options={navOptionHandler}/>
     
      <Tab.Screen name="CollegeFee" component={CollegeFeeScreen} options={navOptionHandler}/>
      <Tab.Screen name="Attendance" component={AttendanceScreen} options={navOptionHandler}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={navOptionHandler}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
