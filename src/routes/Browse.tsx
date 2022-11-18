import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
import BrowseTable from "../components/BrowseTable";
import { useAxios } from "../hooks/useAxios";
import { IBrowse } from "../interfaces/IBrowse";
const Browse = () => {
  const [browse, setBrowse] = useState<IBrowse>();

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [detailed, setDetailed] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/neo/browse",
    headers: {
      accept: "*/*",
    },
    params: {
      // page: startDate,
      // size: endDate,
      // detailed: detailed,
    },
  });

  useEffect(() => {
    if (response) {
      setBrowse(response.data);
    }
  }, [response]);

  useEffect(() => {
    if (browse) {
      setPage(browse.page.number);
      setTotalPage(browse.page.total_pages);
      setTotalElements(browse.page.total_elements);
    }
  }, [browse]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <>
          <h2>
            Browse{" "}
            <span style={{ color: "grey" }}>
              {page} of {totalPages} pages. There are {totalElements} records of
              N.E.O.
            </span>
          </h2>
          <BrowseTable data={browse?.near_earth_objects} />
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default Browse;
