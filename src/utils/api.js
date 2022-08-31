import axios from "axios";

const api = axios.create({
  baseURL: "https://the-one-api.dev/v2",
  responseType: "json",
  headers: {
    Authorization: "Bearer 45AP-zHxx92Xt7SwS7Dy",
  },
});

export default api;
