import { Hero } from '../Hero';

export class Farmer extends Hero {
  constructor(type: string, name: string, lastName: string, power: number, health: number) {
    super(type, name, lastName, 0, health);
  }
}
