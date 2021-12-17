// eslint-disable-next-line no-restricted-imports
import { Hero } from '../Hero';

export class Wizard extends Hero {
  type = 'WIZARD';
  constructor(name, lastName, power, health) {
    super(name, lastName, power, health);
  }
}
