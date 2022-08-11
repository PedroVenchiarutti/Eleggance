import axios from "axios";

const apiGet = axios.create({
  baseURL: "http://localhost:3333/",
  method: "GET",
});

const apiPost = axios.create({
  baseURL: "http://localhost:3333/",
  method: "POST",
  data: {},
});

/* const Api = axios.create({
  baseURL: "http://localhost:3333/",
  method: "GET",
});

const Api = axios.create({
  baseURL: "http://localhost:3333/",
  method: "GET",
}); */

export { apiGet, apiPost };
