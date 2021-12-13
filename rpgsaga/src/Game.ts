import { Hero } from './Hero';
import { Generator } from './Generator';
// import { Round } from './Round';

export class Game {
  heroList: Hero[];
  random: Generator = new Generator();
  totalAmountOfHeroes = 6;
  pairsArray: Hero[] = [];
  run() {
    this.initHero();
    this.populate();
  }

  initHero() {
    this.pairsArray = this.random.initHero(this.totalAmountOfHeroes);
  }

  private populate() {
    this.random.makePairs(this.pairsArray);
  }

  gameOver(heroList: [string]) {
    console.log(`Game is over. The winner is ${heroList[0]}! `);
  }
}
