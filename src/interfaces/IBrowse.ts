import { ILinks } from "./ILinks";
import { INeo } from "./INeo";
import { IPage } from "./IPage";

export interface IBrowse {
  links: ILinks;
  page: IPage;
  near_earth_objects: INeo[];
}