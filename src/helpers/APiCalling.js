/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import axios from 'axios';

// Define your API base URL here
const BASE_URL = 'http://192.168.1.6:5000/'; // Replace with your API URL

// Create a reusable axios instance with a base URL
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Set a timeout (optional)
});

// Function to make a GET request
export async function getData(endpoint,queryParams) {
 try {
    let queryString = '';

    // Convert the queryParams object into a query string
    if (queryParams) {
      console.log(JSON.stringify("queryParams == >> ",JSON.stringify(queryParams)))
      queryString = Object.keys(queryParams)
        .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
        .join('&');
    }

    // Append the query string to the endpoint if it exists
    const fullEndpoint = queryString ? `${endpoint}?${queryString}` : endpoint;
    console.log("fullEndpoint = > ",fullEndpoint)
    const response = await api.get(fullEndpoint);
    //console.log("response ", response);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to make a POST request with data
export async function postData(endpoint, data) {
  try {
    const response = await api.post(endpoint, data);
      console.log("response ",response)
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to make a PUT request with data
export async function putData(endpoint, data) {
  try {
    const response = await api.put(endpoint, data);
      console.log("response ",response)
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to make a DELETE request
export async function deleteData(endpoint) {
  try {
    const response = await api.delete(endpoint);
      console.log("response ",response)
    return response.data;
  } catch (error) {
    throw error;
  }
}
