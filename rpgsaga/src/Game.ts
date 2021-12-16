import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';
import { Round } from './Round';

export class Game {
  heroList: Hero[];
  pairsArray: HeroPairs[] = [];
  random: Generator = new Generator();
  round: Round = new Round();
  totalAmountOfHeroes = 10;
  run() {
    this.initHero();
    this.populate();
  }

  initHero() {
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
  }

  private populate() {
    this.pairsArray = this.random.makePairs(this.heroList);
    this.round.startRound(this.pairsArray);
  }

  gameOver(heroList: [string]) {
    console.log(`Game is over. The winner is ${heroList[0]}! `);
  }
}
