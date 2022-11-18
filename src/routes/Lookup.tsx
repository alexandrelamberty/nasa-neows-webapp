import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LookupDetails from "../components/LookupDetails";
import { useAxios } from "../hooks/useAxios";
import { INeo } from "../interfaces/INeo";

const Lookup = () => {
  let { id } = useParams();
  const [lookup, setLookup] = useState<INeo | undefined>();
  const [detailed, setDetailed] = useState<boolean>(false);

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/neo/" + id,
    headers: {
      accept: "*/*",
    },
    params: {
      // detailed: detailed,
    },
  });

  useEffect(() => {
    if (response) setLookup(response.data);
  }, [response]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <>
          <h2>
            Lookup <span style={{ color: "grey" }}>N.E.O ID {id}</span>
          </h2>
          <LookupDetails data={lookup} />
        </>
      )}
    </div>
  );
};

export default Lookup;
