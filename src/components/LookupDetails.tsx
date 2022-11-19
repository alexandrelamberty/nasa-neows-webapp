import { useEffect } from "react";
import {
  Grid,
  Header,
  Image,
  Item,
  Segment,
  Statistic,
} from "semantic-ui-react";
import { INeo } from "../interfaces/INeo";
import CadMinimalTable from "./CadMinimalTable";
import CadTable from "./CloseApproachTable";
import LookupChart from "./LookupChart";

type Props = {
  data?: INeo | undefined;
};

/**
 * LookupDetails
 * @param param0
 * @returns
 */
const LookupDetails = ({ data }: Props) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <Stats />
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Meta>ID</Item.Meta>
                    <Item.Description>{data?.id}</Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Name</Item.Meta>
                    <Item.Description>{data?.name}</Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>NEO reference ID</Item.Meta>
                    <Item.Description>
                      {data?.neo_reference_id}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Name limited</Item.Meta>
                    <Item.Description>{data?.name_limited}</Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>NASA JPL url</Item.Meta>
                    <Item.Description>
                      <a
                        href={data?.nasa_jpl_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data?.nasa_jpl_url}
                      </a>
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Absolute magnitude</Item.Meta>
                    <Item.Description>
                      {data?.absolute_magnitude_h}
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Header as="h5" attached="top">
              Orbital data
            </Header>
            <Segment attached>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Meta>Orbit ID</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.orbit_id}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Orbit determination date</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.orbit_determination_date}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Orbit determination date</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.orbit_determination_date}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>First observation date</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.first_observation_date}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Last observation date</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.last_observation_date}
                    </Item.Description>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Content>
                    <Item.Meta>Data arc in days</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.data_arc_in_days}
                    </Item.Description>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Content>
                    <Item.Meta>Observations used</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.observations_used}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Orbit unceretainty</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.orbit_uncertainty}
                    </Item.Description>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Content>
                    <Item.Meta>Minimum orbit intersection</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.minimum_orbit_intersection}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Jupiter tisserand invariant</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.jupiter_tisserand_invariant}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Epoch osculation</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.epoch_osculation}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Eccentricity</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.eccentricity}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Semi major axis</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.semi_major_axis}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Inclination</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.inclination}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Ascending node longitude</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.ascending_node_longitude}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Orbital period</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.orbital_period}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Perihelion distance</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.perihelion_distance}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Perihelion argument</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.perihelion_argument}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Aphelion distance</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.aphelion_distance}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Perihelion time</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.perihelion_time}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Meano anomaly</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.mean_anomaly}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Mean motion</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.mean_motion}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Equinox</Item.Meta>
                    <Item.Description>
                      {data?.orbital_data?.epoch_osculation}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>Orbit class</Item.Meta>
                    <Item.Description>
                      <Item.Group>
                        <Item>
                          <Item.Content>
                            <Item.Meta>Type</Item.Meta>
                            <Item.Description>
                              {data?.orbital_data?.orbit_class.orbit_class_type}
                            </Item.Description>
                          </Item.Content>
                        </Item>
                        <Item>
                          <Item.Content>
                            <Item.Meta>Range</Item.Meta>
                            <Item.Description>
                              {
                                data?.orbital_data?.orbit_class
                                  .orbit_class_range
                              }
                            </Item.Description>
                          </Item.Content>
                        </Item>
                        <Item>
                          <Item.Content>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                              {
                                data?.orbital_data?.orbit_class
                                  .orbit_class_description
                              }
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Header as="h5" attached="top">
              Close approaches
            </Header>
            <Segment attached compact>
              <CadMinimalTable data={data?.close_approach_data} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const Stats = () => {
  return (
    <Grid columns="equal" textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Statistic label="Max relative velocity in km/s" value="34" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Statistic label="Min miss distance in km" value="13008231" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Statistic label="Most Orbited" value="Venus" />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LookupDetails;
