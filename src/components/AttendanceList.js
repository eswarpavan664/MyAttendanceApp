/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AttendanceList = () => {
  const subjects = [
    { name: 'Math', correct: true },
    { name: 'Science', correct: false },
    { name: 'History', correct: true },
    { name: 'English', correct: false },
  ];

  return (
    <View style={styles.container}>
      {subjects.map((subject, index) => (
        <View key={index} style={styles.subjectItem}>
          <Text style={styles.subjectName}>{subject.name}</Text>
          {subject.correct ? (
            <Text style={styles.indicator}>✓</Text>
          ) : (
            <Text style={[styles.indicator, {color: 'red'}]}>X</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 10,
    marginTop:10
  },
  subjectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicator: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green', // Change color based on correctness
  },
});

export default AttendanceList;
