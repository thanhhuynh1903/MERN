// src/api/loginApi.js
import axios from 'axios';

const getAllWatch = async () => {
  try {
    const response = await axios.get("http://localhost:8080/watches");
    console.log(response.data);
    if(response.data.succes){
        return response?.data.watchesList;
    }
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default getAllWatch;
