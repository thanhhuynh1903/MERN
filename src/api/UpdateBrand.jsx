// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";
const UpdateBrand = async (id, data) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    await axios.put(
      `http://localhost:8080/brands/update/${id}`,
      data,
      { headers }
    );
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default UpdateBrand;
