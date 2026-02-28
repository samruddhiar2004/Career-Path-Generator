import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Auth APIs
const authAPI = {
  register: async (name, email, password) => {
    const response = await api.post("/api/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  },
  login: async (email, password) => {
    const response = await api.post("/api/auth/login", { email, password });
    return response.data;
  },
};

// User APIs
const userAPI = {
  getProfile: async () => {
    const response = await api.get("/api/user/profile");
    return response.data;
  },
  updateProfile: async (userData) => {
    const response = await api.put("/api/user/profile", userData);
    return response.data;
  },
};

export { userAPI, authAPI };
