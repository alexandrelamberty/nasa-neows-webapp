import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.nasa.gov/neo/rest/v1";
axios.defaults.params = {
  api_key: "DEMO_KEY",
};

export const useAxios = (params: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    console.log(params);
    try {
      const result = await axios.request(params);
      console.log(result);
      setResponse(result);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err);
        console.log(err);
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
