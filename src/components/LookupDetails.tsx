import { useEffect } from "react";
import { Grid, Image, Item, Statistic } from "semantic-ui-react";
import { INeo } from "../interfaces/INeo";
import CadMinimalTable from "./CadMinimalTable";
import CadTable from "./CloseApproachTable";
import LookupChart from "./LookupChart";

type Props = {
  data?: INeo | undefined;
};

const LookupDetails = ({ data }: Props) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <Stats />
      <Grid columns="two">
        <Grid.Row>
          <Grid.Column>
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
                  <Item.Meta>Absolute magnitude</Item.Meta>
                  <Item.Description>
                    {data?.absolute_magnitude_h}
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Content>
                  <Item.Meta>Orbital data</Item.Meta>
                  <Item.Description>
                    <Item.Group>
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
                    </Item.Group>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item>
              <Item.Content>
                <Item.Meta>Close Approaches</Item.Meta>
                <Item.Description>
                  <CadMinimalTable data={data?.close_approach_data} />
                </Item.Description>
                <Item.Extra>
                  * The data number have been rounded and some metric system are
                  omited.
                </Item.Extra>
              </Item.Content>
            </Item>
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
          <Statistic label="Max relative velocity in km/s" value="34" />
        </Grid.Column>
        <Grid.Column>
          <Statistic label="Min miss distance in km" value="13008231" />
        </Grid.Column>
        <Grid.Column>
          <Statistic label="Most Orbited" value="Venus" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LookupDetails;
