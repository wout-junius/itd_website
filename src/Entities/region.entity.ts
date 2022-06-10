import { Manufacturer } from "./manufacturer.entity";
import { Operator } from "./operator.entity";

export interface Region {
  regionId: number;

  name: string;

  country: string;

  exists: boolean;

  operators: Operator[];

  manufacturers: Manufacturer[];
}
