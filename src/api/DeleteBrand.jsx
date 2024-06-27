// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";
const DeleteBrand = async (id) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.delete(`http://localhost:8080/brands/delete/${id}`,{headers});

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default DeleteBrand;
