import axios, { Axios } from "axios";

const Api = axios.create({
  // baseURL: "https://api-elegancce.herokuapp.com/",
  baseURL: "http://localhost:3333/"
});

export default Api;
