import { Hero } from './Hero';
import { Generator } from './Generator';
import { Round } from './Round';
import { HeroPairs } from './HeroPairs';

export class Game {
  heroList: Hero[];
  random: Generator = new Generator();
  round: Round = new Round();
  totalAmountOfHeroes = 10;
  newHeroArray: HeroPairs[] = [];
  run() {
    this.initHero();
    this.getNumbersOfHeroes();
    this.round.startRound(this.newHeroArray);
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
