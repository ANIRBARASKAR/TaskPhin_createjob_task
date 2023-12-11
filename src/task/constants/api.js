// api.js
import axios from "axios";
import { API_URL } from "./constant";

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    // console.log("Posted Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    // console.log("Updated Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    // console.log("Deleted Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
