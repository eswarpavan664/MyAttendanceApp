/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../components/Header';
import AttendanceFilter from '../components/AttendanceHorizentalFilter';
import AttendanceList from '../components/AttendanceList';
import { ScrollView } from 'react-native-gesture-handler';

const AttendanceScreen = ({navigation}) => {
  // Dummy data for today's attendance and previous attendance reports
  const todayAttendance = [
    { id: 1, classDate: '2024-03-13', status: 'Present' },
    { id: 2, classDate: '2024-03-14', status: 'Absent' },
    // Add more data as needed
  ];

  const previousAttendanceReports = [
    { id: 1, month: 'January', attendancePercentage: 85 },
    { id: 2, month: 'February', attendancePercentage: 92 },
    // Add more data as needed
  ];

  // Function to handle create new attendance
  const handleMarkAttendance = () => {
    // Add your logic for marking attendance here
    console.log('Marking attendance...');
  };

  return (
     <>
      <CustomHeader navigation={navigation} title="Attendance" />
      <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Attendance</Text>
      
       
        <AttendanceFilter/>
       <ScrollView >
 
        <AttendanceList/>

          <View style={{marginTop:40}}>

                <Text style={styles.subtitle}>Today's Attendance</Text>
                <View style={styles.attendanceContainer}>
                  {todayAttendance.map((record) => (
                    <View key={record.id} style={styles.attendanceItem}>
                      <Text>{record.classDate}</Text>
                      <Text>{record.status}</Text>
                    </View>
                  ))}
                </View>

          
                <Text style={styles.subtitle}>Previous Attendance Reports</Text>
                <View style={styles.previousAttendanceContainer}>
                  {previousAttendanceReports.map((report) => (
                    <View key={report.id} style={styles.reportItem}>
                      <Text>{report.month}</Text>
                      <Text>{`${report.attendancePercentage}%`}</Text>
                    </View>
                  ))}
                </View>
          </View>
   


       </ScrollView> 
    
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Subtitle color
  },
  attendanceContainer: {
    marginBottom: 20,
  },
  attendanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  previousAttendanceContainer: {
    marginBottom: 20,
  },
  reportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressItem: {
    alignItems: 'center',
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

export default AttendanceScreen;
