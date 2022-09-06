import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3333/",
  auth: localStorage.getItem("token")
});

export default Api;
