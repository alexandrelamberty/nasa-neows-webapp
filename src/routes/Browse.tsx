import { useEffect, useState } from "react";
import { Pagination, PaginationProps } from "semantic-ui-react";
import BrowseTable from "../components/BrowseTable";
import { useAxios } from "../hooks/useAxios";
import { IBrowse } from "../interfaces/IBrowse";
const Browse = () => {
  const [browse, setBrowse] = useState<IBrowse>();
  const [detailed, setDetailed] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  let query = {
    method: "GET",
    url: "/neo/browse",
    params: {
      page: page,
      detailed: detailed,
    },
  };
  const { response, error, loading, fetchData } = useAxios(query);

  const onPageChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: PaginationProps
  ) => {
    setPage((data.activePage as number) - 1);
  };

  useEffect(() => {
    fetchData(query);
  }, [page]);

  useEffect(() => {
    if (response && response.data) {
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
            Browse <span style={{ color: "grey" }}>Near Earth Objects</span>
          </h2>
          <Pagination
            activePage={page + 1}
            defaultActivePage={1}
            boundaryRange={1}
            siblingRange={1}
            showEllipsis={true}
            showFirstAndLastNav={true}
            showPreviousAndNextNav={true}
            totalPages={totalPages - 1}
            onPageChange={onPageChange}
          />
          <BrowseTable data={browse?.near_earth_objects} />
        </>
      )}
    </div>
  );
};

export default Browse;
