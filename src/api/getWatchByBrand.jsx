import axios from "./axios";
import useAuth from "../hooks/useAuth";

const GetWatchesByBrand = async (brandId) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`http://localhost:8080/watches/brand/${brandId}`, { headers });
    return response.data.watchesList;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default GetWatchesByBrand;