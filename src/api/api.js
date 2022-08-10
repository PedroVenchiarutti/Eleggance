import axios from "axios";

const Api = axios.create({
  baseURL: `http://localhost:3333/`,
  method: "GET",
});

export default Api;
