import { PowerSource } from "./Enums";
import { SpecificEntity } from "./specific-entity.entity";

export interface MotorCoach {
  motorCoachId: number;

  modelName: string;

  buildYear: Date;

  maxSpeed: number;

  horsePower: number;

  brakePower: number;

  weight: number;

  length: number;

  width: number;

  height: number;

  nickNames: string[];

  description: string;

  amountMade: number;

  powerSource: PowerSource;

  steatTypes: string[];

  steatAmount: number[];

  specificEntities?: SpecificEntity[];
}
