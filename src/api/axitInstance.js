import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:2000/api", // Replace with your backend URL
  withCredentials: true,
});

export default api;