import { ILinks } from "./ILinks";
import { INeo } from "./INeo";

// type Neo = Record<string, INeo[]>

export interface IFeed {
  links: ILinks;
  element_count: number;
  // near_earth_objects: any;
  near_earth_objects: Record<string, INeo[]>;
}