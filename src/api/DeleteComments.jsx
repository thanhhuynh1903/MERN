// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";
const DeleteComments = async (id,commentId) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    await axios.delete(`http://localhost:8080/detail/${id}/comments/${commentId}`,{headers});
  
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default DeleteComments;
