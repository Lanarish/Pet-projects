import { Hero } from '../Hero';
import { Logger } from '../Logger';
import { FireArrows } from '../Super_Powers/FireArrows';

export class Archer extends Hero {
  constructor(type: string, name: string, lastName: string, power: number, health: number, logger: Logger) {
    super(type, name, lastName, power, health);
    this.superPower = new FireArrows(logger);
  }
}
