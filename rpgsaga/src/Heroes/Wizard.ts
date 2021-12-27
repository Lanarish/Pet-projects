import { Hero } from '../Hero';
import { Logger } from '../Logger';
import { Bewitchment } from '../Super_Powers/Bewitchment';

export class Wizard extends Hero {
  constructor(type: string, name: string, lastName: string, power: number, health: number, logger: Logger) {
    super(type, name, lastName, power, health);
    this.superPower = new Bewitchment(logger);
  }
}
