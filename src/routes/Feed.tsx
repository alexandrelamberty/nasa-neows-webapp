import { useEffect, useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { ApiKeyModalForm } from "../components/ApiKey";
import DateRangePicker from "../components/DateRangePicker";
import FeedTable from "../components/FeedTable";
import SectionHeader from "../components/SectionHeader";
import { useAxios } from "../hooks/useAxios";
import { dateAdd, dateRange } from "../hooks/useDate";
import { IFeed } from "../interfaces/IFeed";

const Feed = () => {
  // Query variables
  const [detailed, setDetailed] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(dateAdd(startDate, 7));

  // The ranges of dates to retrieve the feed neos dates keys.
  const [rangeDate, setRangeDate] = useState<Date[]>(
    dateRange(startDate, endDate, true)
  );

  let query = {
    method: "GET",
    url: "/feed",
    params: {
      start_date: startDate.toISOString().slice(0, 10),
      end_date: endDate.toISOString().slice(0, 10),
      detailed: detailed,
    },
  };

  // Result
  const [neos, setNeos] = useState([]);
  const { response, error, loading, fetchData } = useAxios(query);

  const dateRangePickerChange = (startDate: Date, endDate: Date) => {
    console.log("DataRangePickerChange");
    setStartDate(startDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    console.log("Query change", query);
  }, [query]);

  useEffect(() => {
    if (response) {
      if (response.data) {
        var temp: any = [];
        for (var i: number = 0; i < rangeDate.length; i++) {
          var date: string = String(rangeDate[i].toISOString().slice(0, 10));
          var data = response.data.near_earth_objects[date];
          temp = temp.concat(data);
        }
        setNeos(temp);
      }
    }
  }, [response]);

  return (
    <div>
      {loading && (
        <div>
          <p>
            <Loader inverted>Loading</Loader>
          </p>
        </div>
      )}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <>
          <h2>
            Feed <span style={{ color: "grey" }}>Close approaches</span>
          </h2>
          <SectionHeader />
          <DateRangePicker
            startDate={startDate}
            maxRange={7}
            onChange={dateRangePickerChange}
          />
          <FeedTable data={neos} />
        </>
      )}
    </div>
  );
};

export default Feed;
