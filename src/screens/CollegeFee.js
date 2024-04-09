/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../components/Header';

const CollegeFeeScreen = ({navigation}) => {
  // Dummy data for recent applied leaves
  const recentLeaves = [
    { id: 1, type: 'Sick Leave', startDate: '2024-03-10', endDate: '2024-03-12' },
    { id: 2, type: 'Vacation', startDate: '2024-03-20', endDate: '2024-03-25' },
    { id: 3, type: 'Maternity Leave', startDate: '2024-04-01', endDate: '2024-04-30' },
  ];

  // Function to handle create new leave
  const handleCreateLeave = () => {
    // Add your logic for creating a new leave here
    console.log('Creating a new leave...');
  };

  return (
    <>
     <CustomHeader navigation={navigation} title="College Fee" />
       <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Recent Applied Leaves</Text>

      {/* Recent Applied Leaves */}
      {recentLeaves.map((leave) => (
        <View key={leave.id} style={styles.leaveItem}>
          <Text style={styles.leaveType}>{leave.type}</Text>
          <Text>{`${leave.startDate} - ${leave.endDate}`}</Text>
        </View>
      ))}

      {/* Floating Button for Create New Leave */}
      <TouchableOpacity style={styles.floatingButton} onPress={handleCreateLeave}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Title color
  },
  leaveItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leaveType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff', // Leave type color
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default CollegeFeeScreen;
