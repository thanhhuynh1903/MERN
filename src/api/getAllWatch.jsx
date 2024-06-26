// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";
const GetAllWatch = async () => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get("http://localhost:8080/watches",{headers});
 
    if(response.data.success){
        return response?.data.watchesList;
    }
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default GetAllWatch;
