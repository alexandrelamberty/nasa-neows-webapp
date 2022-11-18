import { useEffect, useState } from "react";
import DateRangePicker from "../components/DateRangePicker";
import FeedTable from "../components/FeedTable";
import { useAxios } from "../hooks/useAxios";
import { useDateAdd, useDateRange, useDateSubstract } from "../hooks/useDate";
import { IFeed } from "../interfaces/IFeed";
import { INeo } from "../interfaces/INeo";
import NoMatch from "./NoMatch";

const Feed = () => {
  const [neos, setNeos] = useState([]);
  const [feed, setFeed] = useState<IFeed>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(useDateAdd(startDate, 7));
  const [rangeDate, setRangeDate] = useState<Date[]>(
    useDateRange(startDate, endDate, true)
  );
  const [detailed, setDetailed] = useState<boolean>(false);

  const { response, error, loading, fetchData } = useAxios({
    method: "GET",
    url: "/feed",
    params: {
      start_date: startDate,
      end_date: endDate,
      detailed: detailed,
    },
  });

  useEffect(() => {}, [startDate]);

  useEffect(() => {
    console.log("Response feed aggregation");
    console.log(response);
    if (response) {
      if (response.data) {
        setFeed(response.data);
        var temp: any = [];
        rangeDate.map((element) => {
          var date: string = String(element.toISOString().slice(0, 10));
          var data = feed?.near_earth_objects[date];
          temp = temp.concat(data);
        });
        setNeos(temp);
      }
    }
  }, [response]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <>
          <h2>
            Feed{" "}
            <span style={{ color: "grey" }}>
              {String(startDate.toISOString().slice(0, 10))} -{" "}
              {String(endDate.toISOString().slice(0, 10))}
            </span>
          </h2>
          <DateRangePicker />
          <FeedTable data={neos} />
        </>
      )}
    </div>
  );
};

export default Feed;
