import { Hero } from './Hero';

export class HeroPairs {
  firstHero: Hero;
  secondHero: Hero;

  constructor(firstHero: Hero, secondHero: Hero) {
    this.firstHero = firstHero;
    this.secondHero = secondHero;
  }
}
