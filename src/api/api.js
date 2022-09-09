import axios, { Axios } from "axios";

const Api = axios.create({
  baseURL: "https://api-elegancce.herokuapp.com/",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export default Api;