import { useEffect, useState } from "react";
import { ApiKeyModalForm } from "../components/ApiKey";
import DateRangePicker from "../components/DateRangePicker";
import FeedTable from "../components/FeedTable";
import { useAxios } from "../hooks/useAxios";
import { useDateAdd, useDateRange } from "../hooks/useDate";
import { IFeed } from "../interfaces/IFeed";

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

  useEffect(() => {
    if (response) {
      console.log("response", response);
      if (response.data) {
        console.log("useEffect::response.data");
        // FIXME: Bug ???
        var temp: any = [];
        console.log(rangeDate.length);
        for (var i: number = 0; i < rangeDate.length; i++) {
          console.log("loop");
          var date: string = String(rangeDate[i].toISOString().slice(0, 10));
          console.log(date);
          var data = response.data.near_earth_objects[date];
          console.log("feed object date key", data);
          temp = temp.concat(data);
        }
        setNeos(temp);
        /*
        
         // Create an array concatenating all the k
        var temp: any = [];
        rangeDate.map((element) => {
          var date: string = String(element.toISOString().slice(0, 10));
          console.log(date);
          var data = feed?.near_earth_objects[date];
          console.log("feed object date key", data);
          temp = temp.concat(data);
        });
        setNeos(temp);
        */
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
