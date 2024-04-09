import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      {/* Side menu button */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Page title */}
      <Text style={styles.title}>{title}</Text>

      {/* Notification icon */}
      <TouchableOpacity style={styles.notificationButton}>
        <Ionicons name="notifications" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  menuButton: {
    marginRight: 'auto',
  },
  notificationButton: {
    marginLeft: 'auto',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
