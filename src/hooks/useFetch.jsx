import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth";

import Api from "../api/api";

const fromStorage = localStorage.getItem("token");
const token = fromStorage ? JSON.parse(fromStorage) : {};

const ensureTokenValidation = (isProtectedUrl = true) => {
  const { userLogout } = useContext(AuthContext);
  if (isProtectedUrl && new Date(token.expires).valueOf() < new Date().valueOf()) {
    alert("Por favor, faça login novamente para prosseguir em nosso site");
    userLogout();
  }
}

const headers = {
  Authorization: token.generatedToken
}

//Criar um hook personalizado quer consiga fazer as requisiçoes na API
export function useFetch(url, isProtectedUrl = true) {
  ensureTokenValidation(isProtectedUrl);

  const [data, setData] = useState([]);
  const [insert, setInsert] = useState(false);
  const [loading, setLoading] = useState(true);

  //Fazer uma rota para puxar os produtos no all getALlProducts
  useEffect(() => {
    async function getItem() {
      const getItemAll = Api.get(`${url}`, { headers });
      const response = await getItemAll;
      setData(response.data);
      setInsert(true);
      setLoading(false);
    }
    getItem();
  }, []);

  return { data, insert, loading };
}

export function usePost(url, data, callbackSuccess, callbackFailure, isProtectedUrl) {
  ensureTokenValidation(isProtectedUrl);

  Api.post(url, data, { headers })
    .then(callbackSuccess)
    .catch(callbackFailure);
}

export function usePut(url, data, callbackSuccess, callbackFailure, isProtectedUrl) {
  ensureTokenValidation(isProtectedUrl);

  Api.put(url, data, { headers })
    .then(callbackSuccess)
    .catch(callbackFailure);
}

export function useDelete(url, callbackSuccess, callbackFailure, isProtectedUrl) {
  ensureTokenValidation(isProtectedUrl);

  Api.delete(url, { headers })
    .then(callbackSuccess)
    .catch(callbackFailure);
}
