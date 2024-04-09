/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import   React,{useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { RootStackParamList } from "../types";
import HomePage from "../screens/HomeScreen";
import { get_local_ValueByKey } from "../helpers/GetLocalData";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const navOptionHandler = () => ({
  headerShown: false,
});

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator({ navigation }) {
  
  return (
    <Stack.Navigator
       
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={navOptionHandler}/>
      <Stack.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
      
         <Stack.Screen name="HomeScreen" component={HomePage} options={navOptionHandler}/>
    </Stack.Navigator>
  );
}
