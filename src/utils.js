import axios from "axios";

const domain = "https://django-backend-yqt9.onrender.com/";

export const api = axios.create({
  baseURL: domain + "api/",
});