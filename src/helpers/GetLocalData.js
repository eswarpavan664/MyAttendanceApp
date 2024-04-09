/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define an async method to get a value by key from AsyncStorage
async function get_local_ValueByKey(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Value found in AsyncStorage
      return value;
    } else {
      // Key not found in AsyncStorage
      console.log(`Key "${key}" not found in AsyncStorage.`);
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.error('Error retrieving data from AsyncStorage:', error);
    return null;
  }
}


async function set_local_ValueByKey(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`Value for key "${key}" set successfully.`);
  } catch (error) {
    // Error setting data
    console.error(`Error setting data for key "${key}" in AsyncStorage:`, error);
  }
}

// Define an async method to remove a value by key from AsyncStorage
async function remove_local_ValueByKey(key) {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Key "${key}" removed from AsyncStorage.`);
  } catch (error) {
    // Error removing data
    console.error(`Error removing key "${key}" from AsyncStorage:`, error);
  }
}

export { get_local_ValueByKey ,set_local_ValueByKey,remove_local_ValueByKey};
