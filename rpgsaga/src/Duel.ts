import { Attack } from './Attack';
import { Hero } from './Hero';
import { Logger } from './Logger';
import { Pair } from './Pair';

export class Duel {
  private logger: Logger;
  private firstFighter: Hero;
  private secondFighter: Hero;

  constructor(pairOfHeroes: Pair<Hero>, logger: Logger) {
    this.logger = logger;
    const turn: boolean = this.whoIsFirst();
    if (!turn) {
      this.firstFighter = pairOfHeroes.first;
      this.secondFighter = pairOfHeroes.second;
    } else {
      this.firstFighter = pairOfHeroes.second;
      this.secondFighter = pairOfHeroes.first;
    }
  }
  startDuel(): Hero {
    this.logger.duelStart(this.firstFighter, this.secondFighter);
    this.logger.firstTurn(this.firstFighter);
    let winner: Hero;
    const attack: Attack = new Attack(this.logger);
    while (this.firstFighter.Health && this.secondFighter.Health) {
      try {
        attack.checkAttack(this.firstFighter, this.secondFighter);
      } catch (error) {
        this.logger.error(
          `${this.firstFighter.Type} ${this.firstFighter.toString()} can't attack. He quit from the game`,
        );
        this.logger.showWinner(this.secondFighter);
        return this.secondFighter;
      }
      if (this.secondFighter.Health <= 0) {
        winner = this.firstFighter;
        break;
      }

      try {
        attack.checkAttack(this.secondFighter, this.firstFighter);
      } catch (error) {
        this.logger.error(` ${this.secondFighter.toString()} is just Farmer. He quit from the game`);
        this.logger.showWinner(this.firstFighter);
        return this.firstFighter;
      }
      if (this.firstFighter.Health <= 0) {
        winner = this.secondFighter;
        break;
      }
    }
    this.logger.showWinner(winner);
    return winner;
  }

  whoIsFirst(): boolean {
    return Boolean(Math.floor(Math.random() * 2));
  }
}
