import { AxiosRequestConfig } from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import LookupDetails from "../components/LookupDetails";
import { useAxios } from "../hooks/useAxios";
import { INeo } from "../interfaces/INeo";
import { AppContext } from "../providers/AppContextProvider";

const Lookup = () => {
  let { id } = useParams();
  const { apiKey } = useContext(AppContext);
  const [lookup, setLookup] = useState<INeo | undefined>();
  const [detailed, setDetailed] = useState<boolean>(false);

  // Request
  let requestConfig: AxiosRequestConfig = {
    method: "GET",
    url: "/neo/" + id,
    headers: {
      accept: "*/*",
    },
    params: {
      api_key: apiKey,
    },
  };

  const { response, error, loading } = useAxios(requestConfig);

  useEffect(() => {
    if (response) setLookup(response.data);
  }, [response]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {error?.response?.status == 404 && <p>Not found</p>}
      {!loading && !error && (
        <>
          <h2>
            Lookup <span style={{ color: "grey" }}>N.E.O ID {id}</span>
          </h2>
          <LookupDetails data={lookup} />
        </>
      )}
    </>
  );
};

export default Lookup;
