import { SyntheticEvent, useEffect, useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { SemanticDatepickerProps } from "react-semantic-ui-datepickers/dist/types";
import {
  dateAdd,
  dateSubsract,
  dateTimeString,
  dateDateString,
  dateFullString,
} from "../hooks/useDate";

type DataRangePickerProps = {
  start?: Date;
  end?: Date;
  range?: number;
  onChange: (startDate: Date, endDate: Date) => void;
};

/**
 * Create a start and end date with a specifid range in days.
 * The default range is 7 days
 * @param param0
 * @returns
 */
const DateRangePicker = ({
  start,
  end,
  range = 7,
  onChange,
}: DataRangePickerProps) => {
  const [maxRange, setMaxRange] = useState<number>(range);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  /**
   * When the start date change we calculate the end date.
   * @param event
   * @param data
   */
  const onChangeStartDate = (
    event: SyntheticEvent<Element, Event> | undefined,
    data: SemanticDatepickerProps
  ): void => {
    event?.preventDefault();
    console.log("DateRangePicker::onChangeStartDate");
    var start_date: Date = data.value as Date;
    var end_date: Date = dateAdd(start_date as Date, maxRange);
    // update internal state
    setEndDate(end_date);
    // callback
    onChange(start_date as Date, end_date);
  };

  /**
   * Called by the startDatePicker onChange function.
   * @param event
   * @param data
   */
  const onChangeEndDate = (
    event: SyntheticEvent<Element, Event> | undefined,
    data: SemanticDatepickerProps
  ): void => {
    event?.preventDefault();
    console.log("DateRangePicker::onChangeEndDate");
    var end_date: Date = data.value as Date;
    // Calculate the start date based on the end date and range.
    var start_date: Date = dateSubsract(end_date, maxRange);
    // Update internal state
    setStartDate(start_date);
    // callback
    onChange(start_date, end_date);
  };

  useEffect(() => {
    console.log("DateRangePicker::initialize");
    if (maxRange) {
      // Update internal state
      setMaxRange(maxRange);
    }
    if (start && !end) {
      // Sanatize date prop and update state
      start.setHours(12, 0, 0, 0);
      setStartDate(start);
      // Calculate end date and update state
      setEndDate(dateAdd(start, maxRange));
    } else if (end && !start) {
      // Sanatize date
      end.setHours(12, 0, 0, 0);
      setEndDate(endDate);
      // Caclulate start date and update state
      setStartDate(dateSubsract(end, maxRange));
    }
  }, []);

  return (
    <div>
      <SemanticDatepicker
        id="startDatePicker"
        date={startDate}
        onChange={onChangeStartDate}
        value={startDate}
        clearable={false}
      />{" "}
      <SemanticDatepicker
        id="endDatePicker"
        date={endDate}
        value={endDate}
        onChange={onChangeEndDate}
        clearable={false}
        pointing="right"
      />
    </div>
  );
};

export default DateRangePicker;
