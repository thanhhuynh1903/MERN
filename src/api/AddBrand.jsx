// src/api/loginApi.js
import axios from "./axios";
import useAuth from "../hooks/useAuth";

const AddBrand = async (brandData) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post("http://localhost:8080/brands/create", brandData, { headers });
    return response.data; // Assuming API returns { brandName: "BrandName" }
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default AddBrand;
