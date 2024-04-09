/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const AttendanceFilter = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.number}>{number}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    paddingVertical: 5,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AttendanceFilter;
