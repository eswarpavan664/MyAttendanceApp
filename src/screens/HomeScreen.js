/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TabNavigator from './Tab';
import CustomHeader from '../components/Header';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Home from './Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profile_image from "../assets/images/user.png"
const Drawer = createDrawerNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
 

const CustomDrawerContent = (props) => {
  return (
   <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={profile_image} // Change the path to your logo image
          style={styles.logo}
        />
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('home')}
        icon={({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Attendance"
        onPress={() => props.navigation.navigate('Option1')}
        icon={({ color, size }) => <Ionicons name="options-outline" size={size} color={color} />}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="College Fee"
        onPress={() => props.navigation.navigate('Option2')}
        icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />}
        style={styles.drawerItem}
      />
       <DrawerItem
        label="Courses"
        onPress={() => props.navigation.navigate('Option2')}
        icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />}
        style={styles.drawerItem}
      />
       <DrawerItem
        label="Career motivation"
        onPress={() => props.navigation.navigate('Option2')}
        icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />}
        style={styles.drawerItem}
      />
       <DrawerItem
        label="Jobs"
        onPress={() => props.navigation.navigate('Option2')}
        icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />}
        style={styles.drawerItem}
      />

      
      {/* Add more DrawerItems for Option 3, Option 4, Option 5, and Option 6 similarly */}
    </DrawerContentScrollView>
  );
};
const HomePage = () => {
  return (
    <Drawer.Navigator initialRouteName="Tab" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Tab" component={TabNavigator}  options={navOptionHandler}/>
      <Drawer.Screen name="Option1" component={Screen1} options={navOptionHandler}/>
      <Drawer.Screen name="Option2" component={Screen2} options={navOptionHandler}/>
     
    </Drawer.Navigator>
  );
};

const Screen1 = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Screen 1</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Screen 2</Text>
    </View>
  );
};
 

 
 

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader navigation={navigation} title="Home" />
      <View style={styles.container}>
        {/* Your home screen content */}
        <Text>Welcome to Home Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  topBox: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 5, // for 3D effect on Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.25, // for iOS
    shadowRadius: 3.84, // for iOS
  },
  topText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    color: '#fff',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  squareBox: {
    width: '48%',
    aspectRatio: 1, // to make it square
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    elevation: 2, // for soft UI effect on Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.25, // for iOS
    shadowRadius: 3.84, // for iOS
  },
   drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  drawerItem: {
    justifyContent: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

export default HomePage;
