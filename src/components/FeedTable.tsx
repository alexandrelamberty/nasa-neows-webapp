import { Link } from "react-router-dom";
import { Icon, Table } from "semantic-ui-react";
import { INeo } from "../interfaces/INeo";
import { lookupLink } from "./lookupLink";

type Props = {
  data: INeo[] | null;
};

const FeedTable = ({ data }: Props) => {
  return (
    <Table celled structured selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan="3">Name</Table.HeaderCell>
          <Table.HeaderCell rowSpan="3">Magnitude</Table.HeaderCell>
          <Table.HeaderCell colSpan="2">Estimated diameter</Table.HeaderCell>
          <Table.HeaderCell colSpan="6">Close Approach</Table.HeaderCell>
          <Table.HeaderCell rowSpan="3">Sentry</Table.HeaderCell>
          <Table.HeaderCell rowSpan="3">Hazardous</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Kilometers</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Date</Table.HeaderCell>
          <Table.HeaderCell colSpan="2">Relative velocity</Table.HeaderCell>
          <Table.HeaderCell colSpan="3">Miss distance</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>min</Table.HeaderCell>
          <Table.HeaderCell>max</Table.HeaderCell>
          <Table.HeaderCell>Km/s</Table.HeaderCell>
          <Table.HeaderCell>Km/h</Table.HeaderCell>
          <Table.HeaderCell>Astronomical</Table.HeaderCell>
          <Table.HeaderCell>Lunar</Table.HeaderCell>
          <Table.HeaderCell>Kilmometers</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data?.map((item: INeo) => (
          <Table.Row key={item.id}>
            <Table.Cell>
              <Link to={lookupLink(item.id)}>{item.name}</Link>
            </Table.Cell>
            <Table.Cell>{item.absolute_magnitude_h}</Table.Cell>
            <Table.Cell>
              {Math.round(
                Number(
                  item.close_approach_data[0].relative_velocity
                    .kilometers_per_second
                )
              )}
            </Table.Cell>
            <Table.Cell>
              {Math.round(
                Number(
                  item.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                )
              )}
            </Table.Cell>
            <Table.Cell>
              {item.close_approach_data[0].close_approach_date}
            </Table.Cell>
            <Table.Cell>
              {
                item.close_approach_data[0].relative_velocity
                  .kilometers_per_second
              }
            </Table.Cell>
            <Table.Cell>
              {
                item.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              }
            </Table.Cell>
            <Table.Cell>
              {item.close_approach_data[0].miss_distance.astronomical}
            </Table.Cell>
            <Table.Cell>
              {item.close_approach_data[0].miss_distance.lunar}
            </Table.Cell>
            <Table.Cell>
              {item.close_approach_data[0].miss_distance.kilometers}
            </Table.Cell>
            <Table.Cell>
              {item.is_potentially_hazardous_asteroid ? (
                // <Icon color="red" name="check square" size="large" />
                <p style={{ color: "red" }}>true</p>
              ) : (
                // <Icon color="green" name="times" size="large" />
                <p style={{ color: "green" }}>false</p>
              )}
            </Table.Cell>
            <Table.Cell>
              {item.is_potentially_hazardous_asteroid ? (
                // <Icon color="red" name="check square" size="large" />
                <p style={{ color: "red" }}>true</p>
              ) : (
                // <Icon color="green" name="times" size="large" />
                <p style={{ color: "green" }}>false</p>
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default FeedTable;
