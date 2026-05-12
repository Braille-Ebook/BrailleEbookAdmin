import axios from "axios";
export const BASE_URL = "http://3.35.218.85:3000/admin";
//"http://localhost:3000/admin"

const defaultAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken") ?? "unauthorized";
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { defaultAxios, authAxios };
