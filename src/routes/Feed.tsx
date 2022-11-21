import { AxiosRequestConfig } from "axios";
import { useContext, useEffect, useState } from "react";
import DateRangePicker from "../components/DateRangePicker";
import FeedTable from "../components/FeedTable";
import SectionHeader from "../components/SectionHeader";
import { useAxios } from "../hooks/useAxios";
import { IFeed } from "../interfaces/IFeed";
import { INeo } from "../interfaces/INeo";
import { AppContext } from "../providers/AppContextProvider";

const Feed = () => {
  const { apiKey } = useContext(AppContext);
  const [neos, setNeos] = useState<INeo[]>();
  const [feed, setFeed] = useState<IFeed>();
  const [detailed, setDetailed] = useState<boolean>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  // Request
  let requestConfig: AxiosRequestConfig = {
    method: "GET",
    url: "/feed",
    params: {
      api_key: apiKey,
      start_date: startDate?.toISOString().slice(0, 10),
      end_date: endDate?.toISOString().slice(0, 10),
      detailed: detailed,
    },
  };

  const { response, error, loading, fetchData } = useAxios(requestConfig);

  const dateRangePickerChange = (startDate: Date, endDate: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    if (
      requestConfig &&
      requestConfig.params.start_date &&
      requestConfig.params.end_date
    ) {
      console.log("1 - Query change", requestConfig);
      fetchData(requestConfig);
    }
  }, [startDate]);

  useEffect(() => {
    if (!loading && !error && response && response.data) {
      console.log("1 - Response", response.data);
      setFeed(response.data);
      if (startDate && endDate && feed) {
        var n: INeo[] = extractFeedRecord(feed);
        setNeos(n);
      }
    }
  }, [loading, response]);

  const extractFeedRecord = (feed: IFeed): Array<INeo> => {
    return Object.values(feed.near_earth_objects).flat(1);
  };

  return (
    <>
      <SectionHeader text="Feed" description="Close approaches">
        <DateRangePicker
          start={new Date()}
          range={7}
          onChange={dateRangePickerChange}
        />
      </SectionHeader>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && neos && <FeedTable data={neos} />}
    </>
  );
};

export default Feed;
