import { useEffect, useState } from "react";

// Ensure is valid date ?
type DateString = string;

type DatedRecord = Record<DateString, IRecord[]>;

interface IFeed {
  start: Date;
  end: Date;
  records: DatedRecord;
}

interface IRecord {
  id: string;
  date: Date;
}

const data: IFeed = {
  start: new Date("2020-01-01"),
  end: new Date("2020-01-02"),
  records: {
    // DatedRecord
    "2020-01-01": [
      // IRecord
      { id: "1", date: new Date("2020-01-01") },
      { id: "2", date: new Date("2020-01-01") },
    ],
    "2020-01-022": [
      { id: "3", date: new Date("2020-01-02") },
      { id: "4", date: new Date("2020-01-02") },
    ],
  },
};

const extractFeedRecords = (feed: IFeed): Array<IRecord> => {
  return Object.values(feed.records).flat(1);
};

export const dateString = (date: Date): string => {
  return date.toISOString().slice(0, 10);
};

type RecordListProps = {
  records: Array<IRecord>;
};

function RecordList({ records }: RecordListProps) {
  const listItems = records.map((record: IRecord) => (
    <li key={record.id}>{record.date.toDateString()}</li>
  ));
  return <ul id="records">{listItems}</ul>;
}

const Playground = () => {
  const [feed] = useState<IFeed>(data);
  const [records, setRecords] = useState<IRecord[]>();

  useEffect(() => {
    console.log("feed", feed);
    var feed_records: IRecord[] = extractFeedRecords(feed);
    setRecords(feed_records);
  }, [feed]);

  useEffect(() => {
    console.log("records", records);
  }, [records]);

  return (
    <>
      <p>Records</p>
      {records && <RecordList records={records} />}
    </>
  );
};

export default Playground;
