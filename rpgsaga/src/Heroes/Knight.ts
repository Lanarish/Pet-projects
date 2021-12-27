import { Hero } from '../Hero';
import { Logger } from '../Logger';
import { Nemesis } from '../Super_Powers/Nemesis';

export class Knight extends Hero {
  constructor(type: string, name: string, lastName: string, power: number, health: number, logger: Logger) {
    super(type, name, lastName, power, health);
    this.superPower = new Nemesis(logger);
  }
}
