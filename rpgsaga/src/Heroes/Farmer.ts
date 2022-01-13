import { Hero } from '../Hero';
import { Logger } from '../Logger';
import { PlowTheLand } from '../Super_Powers/PlowTheLand';

export class Farmer extends Hero {
  constructor(type: string, name: string, lastName: string, power: number, health: number, logger: Logger) {
    super(type, name, lastName, 0, health);
    this.Power = 0;
    this.superPower = new PlowTheLand(logger);
  }
}
