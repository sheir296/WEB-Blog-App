import axios from 'axios';

const authApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await authApi.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data; 
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await authApi.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data; 
  }
};

export const checkAuthStatus = async () => {
  try {
    const response = await authApi.get('/check-auth');
    return response.data;
  } catch (error) {
    throw error.response.data; 
  }
};

