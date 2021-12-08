import { Hero } from './Hero';
import { Generator } from './Generator';

// const NUMBER_USERS = 4;
export class Game {
  heroList: Hero[];
  random: Generator = new Generator();
  totalAmountOfHeroes = 10;

  run() {
    this.getNumbersOfHeroes();
    this.initHero();
  }

  initHero() {
    this.random.initHero(this.totalAmountOfHeroes);
  }

  private getNumbersOfHeroes() {
    this.random.makePairs(this.totalAmountOfHeroes);
  }

  gameOver(heroList: [string]) {
    console.log(`Game is over. The winner is ${heroList[0]}! `);
  }
}
