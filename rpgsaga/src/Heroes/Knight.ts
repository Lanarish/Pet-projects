// eslint-disable-next-line no-restricted-imports
import { Hero } from '../Hero';

export class Knight extends Hero {
  type = 'KNIGHT';
  constructor(name, lastName, power, health) {
    super(name, lastName, power, health);
  }
}
