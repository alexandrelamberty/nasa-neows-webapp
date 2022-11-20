import { useState, useEffect, useContext } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { AppContext } from "../providers/AppContextProvider";

axios.defaults.baseURL = "https://api.nasa.gov/neo/rest/v1";

export const useAxios = (params: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    console.log("useAxios", params);
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        console.log(err);
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  return { response, error, loading, fetchData };
};
