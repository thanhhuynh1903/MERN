// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";
const GetAllBrandbyId= async (id) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`http://localhost:8080/brands/api/${id}`,{headers});
 
    if(response.data.success){
        return response?.data?.brandList;
    }
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default GetAllBrandbyId;
