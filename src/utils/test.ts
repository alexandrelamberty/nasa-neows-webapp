
type DatedRecord = Record<string, IRecord[]>

interface IFeed {
  start: Date;
  end: Date;
  records: DatedRecord;
}

interface IRecord {
  id: string;
  date: Date
}

export const mock_feed_data: IFeed = {
  start: new Date("2020-01-01"),
  end: new Date("2020-01-02"),
  records: {
    "2020-01-01": [
      { id: "1", date: new Date("2020-01-01") },
      { id: "2", date: new Date("2020-01-01") }],
    "2020-01-02": [
      { id: "1", date: new Date("2020-01-02") },
      { id: "2", date: new Date("2020-01-02") }]
  }
}
