import axios, { Axios } from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3333/",
  headers: {
    'Authorization': localStorage.getItem("token"),
  },
});

export default Api;