import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';

export class Game {
  heroList: Hero[];
  random: Generator = new Generator();
  totalAmountOfHeroes = 10;
  newHeroArray: HeroPairs[] = [];
  run() {
    this.initHero();
    this.getNumbersOfHeroes();
  }

  initHero() {
    this.random.initHero(this.totalAmountOfHeroes);
  }

  private getNumbersOfHeroes() {
    this.random.makePairs(this.totalAmountOfHeroes);
    this.newHeroArray = this.random.newHeroArray();
  }

  gameOver(heroList: [string]) {
    console.log(`Game is over. The winner is ${heroList[0]}! `);
  }
}
