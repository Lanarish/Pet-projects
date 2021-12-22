import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

export class Duel {
  private logger: Logger = new Logger();
  private winner: Hero;
  startDuel(pairOfHeroes: HeroPairs) {
    this.logger.duelStart(pairOfHeroes.firstHero, pairOfHeroes.secondHero);
    const turn: boolean = this.whoIsFirst();

    let firstFighter;
    let secondFighter;

    if (!turn) {
      firstFighter = pairOfHeroes.firstHero;
      secondFighter = pairOfHeroes.secondHero;
    } else {
      firstFighter = pairOfHeroes.secondHero;
      secondFighter = pairOfHeroes.firstHero;
    }
    this.logger.firstTurn(firstFighter);
    while (firstFighter.health && secondFighter.health) {
      this.fight(firstFighter, secondFighter);
      if (secondFighter.health <= 0) {
        this.winner = firstFighter;
        break;
      }

      this.fight(secondFighter, firstFighter);
      if (firstFighter.health <= 0) {
        this.winner = secondFighter;
        break;
      }
    }
    this.logger.showWinner(this.winner);
    return this.winner;
  }
  whoIsFirst() {
    return Boolean(Math.floor(Math.random() * 2));
  }

  fight(a: Hero, b: Hero) {
    b.Health -= a.Power;
    this.logger.gameProcess(a, b);
  }
}
