import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-back-end.onrender.com"
})