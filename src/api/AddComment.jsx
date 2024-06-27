// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";
const AddComment = async (id,data) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`http://localhost:8080/detail/${id}`,data,{headers});

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default AddComment;
