import { useEffect } from "react";
import { Icon, Table } from "semantic-ui-react";
import { ICloseApproach } from "../interfaces/ICloseApproach";

type Props = {
  data: ICloseApproach[];
};

const CadTable = ({ data }: Props) => (
  <Table celled structured selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan="2" hidden={false}>
          Dates
        </Table.HeaderCell>
        <Table.HeaderCell colSpan="2">Relative velocity</Table.HeaderCell>
        <Table.HeaderCell colSpan="3">Miss distance</Table.HeaderCell>
        <Table.HeaderCell rowSpan="3">Orbiting</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Km/s</Table.HeaderCell>
        <Table.HeaderCell>Km/h</Table.HeaderCell>
        <Table.HeaderCell>Astronomical</Table.HeaderCell>
        <Table.HeaderCell>Lunar</Table.HeaderCell>
        <Table.HeaderCell>Kilmometers</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data?.map((item: ICloseApproach) => (
        <Table.Row key={item.close_approach_date}>
          <Table.Cell>{item.close_approach_date}</Table.Cell>
          <Table.Cell>
            {item.relative_velocity.kilometers_per_second}
          </Table.Cell>
          <Table.Cell>{item.relative_velocity.kilometers_per_hour}</Table.Cell>
          <Table.Cell>{item.miss_distance.astronomical}</Table.Cell>
          <Table.Cell>{item.miss_distance.lunar}</Table.Cell>
          <Table.Cell>{item.miss_distance.kilometers}</Table.Cell>
          <Table.Cell>{item.orbiting_body}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default CadTable;
