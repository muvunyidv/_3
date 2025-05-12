import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your backend URL

export const getDrugs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/drugs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching drugs:", error);
    throw error;
  }
};

export const addDrug = async (drugData) => {
  try {
    const response = await axios.post(`${API_URL}/api/drugs`, drugData);
    return response.data;
  } catch (error) {
    console.error("Error adding drug:", error);
    throw error;
  }
};

export const updateDrug = async (id, drugData) => {
  try {
    const response = await axios.put(`${API_URL}/api/drugs/${id}`, drugData);
    return response.data;
  } catch (error) {
    console.error("Error updating drug:", error);
    throw error;
  }
};

export const deleteDrug = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/drugs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting drug:", error);
    throw error;
  }
};
