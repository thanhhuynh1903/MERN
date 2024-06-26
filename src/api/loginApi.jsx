// src/api/loginApi.js
import axios from 'axios';

const loginApi = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:8080/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default loginApi;
