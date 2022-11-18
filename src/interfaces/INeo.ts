import { ICloseApproach } from "./ICloseApproach";

export interface INeo {
  id: string;
  name: string;
  neo_reference_id: string
  designation?: string;
  name_limited?: string
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: IEstimatedDiameter;
    meters: IEstimatedDiameter;
    miles: IEstimatedDiameter;
    feet: IEstimatedDiameter;
  };
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: ICloseApproach[];
  orbital_data?: {
    orbit_id: string,
    orbit_determination_date: string;
    first_observation_date: string;
    last_observation_date: string;
    data_arc_in_days: number;
    observations_used: number;
    orbit_uncertainty: string;
    minimum_orbit_intersection: string;
    jupiter_tisserand_invariant: string;
    epoch_osculation: string;
    eccentricity: string;
    semi_major_axis: string;
    inclination: string;
    ascending_node_longitude: string;
    orbital_period: string;
    perihelion_distance: string;
    perihelion_argument: string;
    aphelion_distance: string;
    perihelion_time: string;
    mean_anomaly: string;
    mean_motion: string;
    equinox: string;
    orbit_class: {
      orbit_class_type: string;
      orbit_class_range: string;
      orbit_class_description: string;
    }
  };
  is_sentry_object: boolean;
}

interface IEstimatedDiameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}