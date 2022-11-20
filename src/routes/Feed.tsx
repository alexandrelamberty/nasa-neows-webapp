import { useContext, useEffect, useState } from "react";
import { Dimmer, Loader, Menu } from "semantic-ui-react";
import { ApiKeyModalForm } from "../components/ApiKey";
import DateRangePicker from "../components/DateRangePicker";
import FeedTable from "../components/FeedTable";
import SectionHeader from "../components/SectionHeader";
import { useAxios } from "../hooks/useAxios";
import { dateAdd, dateRange } from "../hooks/useDate";
import { IFeed } from "../interfaces/IFeed";
import { AppContext } from "../providers/AppContextProvider";

const Feed = () => {
  // Query variables
  const { apiKey } = useContext(AppContext);
  const [neos, setNeos] = useState([]);
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
      api_key: apiKey,
      start_date: startDate.toISOString().slice(0, 10),
      end_date: endDate.toISOString().slice(0, 10),
      detailed: detailed,
    },
  };
  const { response, error, loading, fetchData } = useAxios(query);

  const dateRangePickerChange = (startDate: Date, endDate: Date) => {
    console.log("DataRangePickerChange", startDate, endDate);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    if (query && query.params.start_date && query.params.end_date) {
      console.log("1 - Query change", query);
      fetchData(query);
    }
  }, [startDate]);

  useEffect(() => {
    if (!loading && !error && response && response.data) {
      console.log("1 - Response", response.data);
      var temp: any = [];
      for (var i: number = 0; i < rangeDate.length; i++) {
        var date: string = String(rangeDate[i].toISOString().slice(0, 10));
        var data = response.data.near_earth_objects[date];
        temp = temp.concat(data);
      }
      setNeos(temp);
    }
  }, [loading, response]);

  return (
    <div>
      <>
        <SectionHeader text="Feed" description="Close approaches">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            maxRange={7}
            onChange={dateRangePickerChange}
          />
        </SectionHeader>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {/* {!loading && !error && <FeedTable data={neos} />} */}
      </>
    </div>
  );
};

export default Feed;
