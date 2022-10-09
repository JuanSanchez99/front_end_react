import axios from "axios";

const domain = "http://localhost:8000/";

export const api = axios.create({
  baseURL: domain + "api/",
});