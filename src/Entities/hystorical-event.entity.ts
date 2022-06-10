import { Manufacturer } from "./manufacturer.entity";
import { Operator } from "./operator.entity";
import { SpecificEntity } from "./specific-entity.entity";



export interface HistoricalEvent {
  historicalEventId: number;

  Date: Date;

  Description: string;

  operator?: Operator;

  manufacturer?: Manufacturer;

  specificEntity?: SpecificEntity;
}
