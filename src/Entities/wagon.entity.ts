import { SpecificEntity } from "./specific-entity.entity";

export interface Wagon {
  wagonId: number;

  modelName: string;

  buildYear: Date;

  maxSpeed: number;

  brakePower: number;

  weight: number;

  length: number;

  width: number;

  height: number;

  nickNames: string[];

  description: string;

  amountMade: number;

  steatTypes: string[];

  steatAmount: number[];

  specificEntities: SpecificEntity[];
}
