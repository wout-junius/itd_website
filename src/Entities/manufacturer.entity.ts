import { HistoricalEvent } from "./hystorical-event.entity";
import { Region } from "./region.entity";

export interface Manufacturer {
  manufacturerId: number;

  name: string;

  foundedAt: Date;

  regions?: Region[];

  historicalEvents?: HistoricalEvent[];
}
