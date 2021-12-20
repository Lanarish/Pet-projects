import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';
import { Round } from './Round';
import { Logger } from './Logger';

export class Game {
  heroList: Hero[];
  winnerList: Hero[];
  pairsArray: HeroPairs[] = [];
  random: Generator = new Generator();
  round: Round = new Round();
  logger: Logger = new Logger();
  totalAmountOfHeroes = 8;
  run() {
    this.initHero();
    this.populate();
  }

  initHero() {
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
  }

  private populate() {
    this.pairsArray = this.random.makePairs(this.heroList);
    this.round.runRound(this.pairsArray);
    while (this.round.winnersList.length > 1) {
      this.restartHealth();
      this.pairsArray = this.random.makePairs(this.round.winnersList);
      this.round.runRound(this.pairsArray);
    }
    if (this.round.winnersList.length === 1) {
      this.logger.showWinnerList(this.round.winnersList);
    }
  }
  restartHealth() {
    this.round.winnersList.forEach(hero => {
      hero.setHealth(this.random.initRandomHeroHealth());
    });
  }
  gameOver(heroList: [string]) {
    console.log(`Game is over. The winner is ${heroList[0]}! `);
  }
}
