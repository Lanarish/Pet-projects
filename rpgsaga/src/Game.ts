import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';
import { Round } from './Round';
import { Logger } from './Logger';

export class Game {
  winnersList: Hero[];
  pairsArray: HeroPairs[] = [];
  random: Generator = new Generator();
  round: Round = new Round();
  logger: Logger = new Logger();
  totalAmountOfHeroes = 4;
  run() {
    this.initHero();
    this.populate();
  }

  initHero() {
    this.round.winnersList = this.random.initHero(this.totalAmountOfHeroes);
  }

  private populate() {
    let restartHealth = false;

    while (this.round.winnersList.length > 1) {
      this.restartHealth(restartHealth);
      restartHealth = true;
      this.pairsArray = this.random.makePairs(this.round.winnersList);
      this.round.runRound(this.pairsArray);
    }
    if (this.round.winnersList.length === 1) {
      this.logger.showWinnerList(this.round.winnersList);
    }
  }
  restartHealth(restartHealth) {
    if (!restartHealth) {
      return;
    }
    this.round.winnersList.forEach(hero => {
      hero.Health = this.random.initRandomHeroHealth();
    });
  }
}
