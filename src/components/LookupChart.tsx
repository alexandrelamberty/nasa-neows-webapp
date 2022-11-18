import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ICloseApproach } from "../interfaces/ICloseApproach";

type Props = {
  process: ICloseApproach[];
};

// Show in modal separately
export const LookupChart = ({ process }: Props) => {
  return (
    <div style={{ padding: "5em" }}>
      <AreaChart
        title="Relative velocity"
        width={800}
        height={400}
        data={process}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="close_approach_date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="relative_velocity.kilometers_per_second"
          stackId="1"
          stroke="#red"
          fill="blue"
        />
      </AreaChart>
      <AreaChart
        title="Relative velocity"
        width={800}
        height={400}
        data={process}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="close_approach_date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="miss_distance.kilometers"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>{" "}
      <AreaChart
        title="Relative velocity"
        width={800}
        height={400}
        data={process}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="close_approach_date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="orbiting_body"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default LookupChart;
