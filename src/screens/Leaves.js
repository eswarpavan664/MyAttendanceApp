/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../components/Header';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const LeavesScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [leaveType, setLeaveType] = useState('');
  const [leaveReason, setLeaveReason] = useState('');
  const [selectedLeaveType, setSelectedLeaveType] = useState('Sick Leave');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);

  // Dummy data for recent applied leaves
  const recentLeaves = [
    { id: 1, type: 'Sick Leave', startDate: '2024-03-10', endDate: '2024-03-12', status: 'Pending' },
    { id: 2, type: 'Vacation', startDate: '2024-03-20', endDate: '2024-03-25', status: 'Approved' },
    { id: 3, type: 'Maternity Leave', startDate: '2024-04-01', endDate: '2024-04-30', status: 'Rejected' },
  ];

  // Function to handle create new leave
  const handleCreateLeave = () => {
    console.log('Creating a new leave...');
    console.log('Start Date:', startDate);
    console.log('Leave Type:', selectedLeaveType);
    console.log('Leave Reason:', leaveReason);
    setModalVisible(false);
  };

  // Function to handle "View Details" button click
  const handleViewDetails = (leave) => {
    setSelectedLeave(leave);
    setDetailsModalVisible(true);
  };

  return (
    <>
      <CustomHeader navigation={navigation} title="Leaves" />
      <View style={styles.container}>
        <Text style={styles.title}>Recent Applied Leaves</Text>
        {recentLeaves.map((leave) => (
          <View key={leave.id} style={styles.leaveItem}>
            <View style={styles.leaveInfo}>
              <Text style={styles.leaveType}>{leave.type}</Text>
              <Text>{leave.startDate}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: leave.status === 'Approved' ? '#FFA500' : '#007bff' }]}
              >
                <Text style={styles.buttonText}>{leave.status}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.detailsButton} onPress={() => handleViewDetails(leave)}>
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.floatingButton} onPress={() => setModalVisible(true)}>
          <Ionicons name="add" size={30} color="#fff" />
        </TouchableOpacity>
         <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Create New Leave</Text>
                <TouchableOpacity
                style={styles.input}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{startDate.toDateString()}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate || startDate;
                    setShowDatePicker(false);
                    setStartDate(currentDate);
                  }}
                />
              )}
              <Picker
                selectedValue={selectedLeaveType}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) => setSelectedLeaveType(itemValue)}
              >
                <Picker.Item label="Sick Leave" value="Sick Leave" />
                <Picker.Item label="Vacation" value="Vacation" />
                <Picker.Item label="Maternity Leave" value="Maternity Leave" />
              </Picker>
              <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Leave Reason"
                multiline={true}
                value={leaveReason}
                onChangeText={setLeaveReason}
              />
              <TouchableOpacity style={styles.submitButton} onPress={handleCreateLeave}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={detailsModalVisible}
        onRequestClose={() => setDetailsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Leave Details</Text>
            <Text>Type: {selectedLeave?.type}</Text>
            <Text>Status: {selectedLeave?.status}</Text>
            <Text>Start Date: {selectedLeave?.startDate}</Text>
            {/* Adjust the marginTop for spacing */}
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setDetailsModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
   detailsButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailsButton: {
    marginTop: 10,
    marginLeft: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaveInfo: {
    flex: 1,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
 
    closeButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LeavesScreen;
