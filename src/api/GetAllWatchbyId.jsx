import axios from "./axios";
import useAuth from "../hooks/useAuth";

const GetAllWatchbyId = async (id) => {
  const token = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`http://localhost:8080/watches/${id}`, { headers });

    if (response.data.success) {
      return response.data.watch;
    } else {
      throw new Error(response.data.message || "Failed to fetch watch data");
    }
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};

export default GetAllWatchbyId;
