import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const setTimeoutPromise = (timeInMs) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), timeInMs);
  });

// api.interceptors.response.use((response) => {
//   return setTimeoutPromise(1000).then(response);
// });
