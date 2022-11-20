import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { ItemGroup, Menu } from "semantic-ui-react";
import { dateAdd, dateSubsract } from "../hooks/useDate";

type DataRangePickerProps = {
  startDate?: Date;
  endDate?: Date;
  maxRange?: number;
  onChange: (startDate: Date, endDate: Date) => void;
};

// FIXME:
type RequireProperty<T, Prop extends keyof T> = T & { [key in Prop]-?: T[key] };
type RequireIdOrToken =
  | RequireProperty<DataRangePickerProps, "startDate">
  | RequireProperty<DataRangePickerProps, "endDate">;

/**
 *
 * @param param0
 * @returns
 */
const DateRangePicker = ({
  startDate,
  endDate,
  maxRange = 7,
  onChange,
}: DataRangePickerProps) => {
  // FIXME: Bug with date rounding to revious day ?
  const onStartDateChange = (event: any, data: any): void => {
    console.log(data.value);
    var ed: Date = dateAdd(data.value, maxRange);
    onChange(data.value, ed);
  };

  const onEndDateChange = (event: any, data: any): void => {
    console.log(data.value);
    var sd: Date = dateSubsract(data.value, maxRange);
    onChange(sd, data.value);
  };

  useEffect(() => {
    console.log("DatePicker", startDate, endDate);
  }, []);

  return (
    <div>
      <SemanticDatepicker
        id="startDatePicker"
        date={startDate}
        onChange={onStartDateChange}
        value={startDate}
        clearable={false}
      />{" "}
      <SemanticDatepicker
        id="endDatePicker"
        date={endDate}
        value={endDate}
        onChange={onEndDateChange}
        clearable={false}
        pointing="right"
      />
    </div>
  );
};

export default DateRangePicker;
