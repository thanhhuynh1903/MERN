import axios from './axios';

const searchWatch = async (query) => {
  try {
    const response = await axios.get(`http://localhost:8080/watches/search?query=${query}`);
    return response.data.watches;
  } catch (error) {
    throw error.response?.data || { message: 'Unknown error' };
  }
};

export default searchWatch;
