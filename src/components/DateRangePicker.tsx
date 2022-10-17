import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onStartDateChange = (event: any, data: any) => setStartDate(data.value);
  const onEndDateChange = (event: any, data: any) => setEndDate(data.value);

  // To check if a range of dates are in chronological order

  useEffect(() => {
    console.log("DatePicker");
  }, []);

  return (
    <div>
      <SemanticDatepicker onChange={onStartDateChange} />
      <SemanticDatepicker onChange={onEndDateChange} />
    </div>
  );
};

export default DateRangePicker;
