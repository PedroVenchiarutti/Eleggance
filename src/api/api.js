import axios, { Axios } from "axios";

const Api = axios.create({
  baseURL: "https://api-elegancce.herokuapp.com/"
});

export default Api;