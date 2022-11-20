import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateRangePicker from "../components/DateRangePicker";
import { dateAdd, dateDateString } from "../hooks/useDate";

const Playground = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  // Query
  useEffect(() => {
    if (startDate && endDate) {
      console.log("-------- Query ----------");
      console.log(startDate);
      console.log(endDate);
    }
    // query with axios, ....
    return () => {};
  }, [startDate]);

  useEffect(() => {
    console.log("Playground::initialize");
  }, []);

  // DateRangePicker change
  const onDateRangePickerChange = (start: Date, end: Date) => {
    console.log("DateRangePicker::onDateRangePickerChange");
    console.log("start", start);
    console.log("end", end);
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DateRangePicker
      start={startDate}
      onChange={onDateRangePickerChange}
      range={2}
    />
  );
};

export default Playground;
