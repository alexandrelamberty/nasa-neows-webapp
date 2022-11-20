import { useContext, useEffect, useState } from "react";
import { Pagination, PaginationProps, Segment } from "semantic-ui-react";
import BrowseTable from "../components/BrowseTable";
import SectionHeader from "../components/SectionHeader";
import { useAxios } from "../hooks/useAxios";
import { IBrowse } from "../interfaces/IBrowse";
import { AppContext } from "../providers/AppContextProvider";
const Browse = () => {
  const { apiKey } = useContext(AppContext);
  const [browse, setBrowse] = useState<IBrowse>();
  const [detailed, setDetailed] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  let query = {
    method: "GET",
    url: "/neo/browse",
    params: {
      api_key: apiKey,
      page: page,
      detailed: detailed,
    },
  };
  const { response, error, loading, fetchData } = useAxios(query);

  const onPageChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: PaginationProps
  ) => {
    setPage(data.activePage as number);
  };

  useEffect(() => {
    fetchData(query);
  }, [page]);

  useEffect(() => {
    if (!loading && !error && response && response.data) {
      setBrowse(response.data);
      if (browse) {
        // this change the query ...
        //setPage(browse.page.number);
        setTotalPage(browse.page.total_pages);
        setTotalElements(browse.page.total_elements);
      }
    }
  }, [loading, response]);

  // useEffect(() => {
  //   if (browse) {
  //     // this change the query ...
  //     //setPage(browse.page.number);
  //     setTotalPage(browse.page.total_pages);
  //     setTotalElements(browse.page.total_elements);
  //   }
  // }, [browse]);

  return (
    <div>
      <>
        <SectionHeader text="Browse" description="Near Earth Objects">
          <Pagination
            activePage={page}
            defaultActivePage={1}
            boundaryRange={1}
            siblingRange={1}
            showEllipsis={true}
            showFirstAndLastNav={true}
            showPreviousAndNextNav={true}
            totalPages={totalPages - 1}
            onPageChange={onPageChange}
          />
        </SectionHeader>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {!loading && !error && (
          <BrowseTable data={browse?.near_earth_objects} />
        )}
      </>
    </div>
  );
};

export default Browse;
