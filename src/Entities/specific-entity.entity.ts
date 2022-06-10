import { HistoricalEvent } from "./hystorical-event.entity";
import { Locomotive } from "./locomotive.entity";
import { MotorCoach } from "./motor-coach.entity";
import { Wagon } from "./wagon.entity";

export interface SpecificEntity {
  id: number;

  specialNumber: string;

  description: string;

  historicalEvents: HistoricalEvent[];

  locomotive: Locomotive;

  motorCoach: MotorCoach;

  wagon: Wagon;
}
