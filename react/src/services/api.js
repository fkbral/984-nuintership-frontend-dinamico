import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const setTimeoutPromise = (resolvedValue, timeInMs) =>
  new Promise((resolve) => setTimeout(() => resolve(resolvedValue), timeInMs));

api.interceptors.request.use((request) => {
  return setTimeoutPromise(request, 1000);
});
