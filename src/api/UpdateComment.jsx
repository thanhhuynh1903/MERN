// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";
const UpdateComment = async (id, commentId, data) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    await axios.put(
      `http://localhost:8080/detail/${id}/comments/${commentId}`,
      data,
      { headers }
    );
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default UpdateComment;
