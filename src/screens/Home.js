/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../components/Header';

const Home = ({ navigation }) => {
  return (
    <>
      <CustomHeader navigation={navigation} title="Home" />
      <View style={styles.container}>
        {/* Top rectangular box */}
        <View style={styles.topBox}>
          <Text style={styles.topText}>Overview</Text>
          <View style={styles.rowContainer}>
            <View style={styles.detailBox}>
              <Text>Total Attendance:</Text>
              <Text>80%</Text>
            </View>
            <View style={styles.detailBox}>
              <Text>Total Attended Classes:</Text>
              <Text>25</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.detailBox}>
              <Text>Total Classes:</Text>
              <Text>30</Text>
            </View>
            <View style={styles.detailBox}>
              <Text>Fee Due:</Text>
              <Text>$200</Text>
            </View>
          </View>
        </View>
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailBox: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
