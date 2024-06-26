// src/api/registerApi.js
import axios from 'axios';

const registerApi = async (name, YOB, username, password) => {
  try {
    const response = await axios.post("http://localhost:8080/register", {
      name,
      YOB,
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default registerApi;
