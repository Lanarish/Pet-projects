import { Hero } from './Hero';
import { Generator } from './Generator';
import { HeroPairs } from './HeroPairs';
import { Round } from './Round';
import { Logger } from './Logger';

export class Game {
  private heroList: Hero[];
  private pairsArray: HeroPairs[] = [];
  private random: Generator = new Generator();
  private round: Round = new Round();
  private logger: Logger = new Logger();
  private totalAmountOfHeroes = 8;

  run() {
    this.initHero();
    this.populate();
    this.makeRound();
  }

  private initHero() {
    this.heroList = this.random.initHero(this.totalAmountOfHeroes);
  }

  private populate() {
    this.pairsArray = this.random.makePairs(this.heroList);
  }
  private makeRound() {
    this.heroList = this.round.runRound(this.pairsArray);

    console.log(this.heroList);
  }

  //     let restartHealth = false;

  //     while (this.round.winnersList.length > 1) {
  //       this.restartHealth(restartHealth);
  //       restartHealth = true;

  //     }
  //     if (this.round.winnersList.length === 1) {
  //       this.logger.showWinnerList(this.round.winnersList);
  //     }
  //   }
  //   restartHealth(restartHealth) {
  //     if (!restartHealth) {
  //       return;
  //     }
  //     this.round.winnersList.forEach(hero => {
  //       hero.Health = this.random.initRandomHeroHealth();
  //     });
}
