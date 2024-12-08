import axios from "axios";

// Create an Axios instance
const axiosInstanceDextools = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Replace with the Dextools API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    "x-api-key": process.env.REACT_APP_SECRET_KEY,
  },
});

// Request interceptor
axiosInstanceDextools.interceptors.request.use(
  (config) => {
    // Add authorization token if required
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstanceDextools.interceptors.response.use(
  (response) => {
    return response.data; // Return the data directly
  },
  (error) => {
    // Handle errors globally
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstanceDextools;
