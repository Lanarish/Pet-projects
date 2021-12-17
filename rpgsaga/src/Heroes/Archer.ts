// eslint-disable-next-line no-restricted-imports
import { Hero } from '../Hero';

export class Archer extends Hero {
  type = 'ARCHER';
  constructor(name, lastName, power, health) {
    super(name, lastName, power, health);
  }
}
