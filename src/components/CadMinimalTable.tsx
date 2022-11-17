import { useEffect } from "react";
import { Icon, Table } from "semantic-ui-react";
import { ICloseApproach } from "../interfaces/ICloseApproach";

type Props = {
  data: ICloseApproach[] | undefined;
};

const CadMinimalTable = ({ data }: Props) => (
  <Table celled structured selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell hidden={false}>Dates</Table.HeaderCell>
        <Table.HeaderCell>Relative velocity in km/s</Table.HeaderCell>
        <Table.HeaderCell>Miss distance in km</Table.HeaderCell>
        <Table.HeaderCell>Orbiting</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data?.map((item: ICloseApproach) => (
        <Table.Row key={item.close_approach_date}>
          <Table.Cell>{item.close_approach_date}</Table.Cell>
          <Table.Cell>
            {item.relative_velocity.kilometers_per_second}
          </Table.Cell>
          <Table.Cell>{item.miss_distance.kilometers}</Table.Cell>
          <Table.Cell>{item.orbiting_body}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default CadMinimalTable;
