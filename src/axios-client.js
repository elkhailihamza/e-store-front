import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:8222/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("token");
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosClient;
