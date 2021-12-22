import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Duel {
  private logger: Logger;
  private firstFighter: Hero;
  private secondFighter: Hero;

  constructor(pairOfHeroes: HeroPairs, logger: Logger) {
    this.logger = logger;

    const turn: boolean = this.whoIsFirst();

    if (!turn) {
      this.firstFighter = pairOfHeroes.firstHero;
      this.secondFighter = pairOfHeroes.secondHero;
    } else {
      this.firstFighter = pairOfHeroes.secondHero;
      this.secondFighter = pairOfHeroes.firstHero;
    }
  }
  startDuel() {
    this.logger.duelStart(this.firstFighter, this.secondFighter);
    this.logger.firstTurn(this.firstFighter);
    let winner: Hero;
    while (this.firstFighter.Health && this.secondFighter.Health) {
      this.fight(this.firstFighter, this.secondFighter);
      if (this.secondFighter.Health <= 0) {
        winner = this.firstFighter;
        break;
      }

      this.fight(this.secondFighter, this.firstFighter);
      if (this.firstFighter.Health <= 0) {
        winner = this.secondFighter;
        break;
      }
    }
    this.logger.showWinner(winner);
    return winner;
  }
  whoIsFirst() {
    return Boolean(Math.floor(Math.random() * 2));
  }

  fight(attacker: Hero, opponent: Hero) {
    opponent.Health -= attacker.Power;
    this.logger.gameProcess(attacker, opponent);
  }
}
