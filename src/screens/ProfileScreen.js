/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profile from "../assets/images/user.png"
import CustomHeader from '../components/Header';
import { remove_local_ValueByKey } from '../helpers/GetLocalData';

const ProfileScreen = ({ navigation }) => {
  // Dummy user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: profile, // Assuming profile image path
  };

  const Logout = async()=>{
    await remove_local_ValueByKey("token")
      navigation.navigate("Login")
  }

  return (
    <>
      <CustomHeader navigation={navigation} title="Profile" />
      <View style={styles.container}>
        {/* Profile Image */}
        <Image source={userData.profileImage} style={styles.profileImage} />

        {/* User Info Card */}
        <View style={styles.card}>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.email}>{userData.email}</Text>
        </View>

        {/* Options */}
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Update Profile</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Language</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Common Settings</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={Logout}>
          <Ionicons name="log-out" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  optionText: {
    fontSize: 16,
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

export default ProfileScreen;
