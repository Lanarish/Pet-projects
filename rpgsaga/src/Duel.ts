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
    this.logger.info(`     
    | The duel between ${this.firstFighter.Type} ${this.firstFighter.FirstName} ${this.firstFighter.LastName} and ${this.secondFighter.Type} ${this.secondFighter.FirstName} ${this.secondFighter.LastName} has started! |                                                                                            
    `);
    this.logger.info(`${this.firstFighter.FirstName} ${this.firstFighter.LastName} attacks first.`);
    let winner: Hero;
    const attack: Attack = new Attack(this.logger);
    while (this.firstFighter.Health && this.secondFighter.Health) {
      try {
        attack.checkAttack(this.firstFighter, this.secondFighter);
      } catch (error) {
        if (error.message === 'noSuperPower') {
          this.logger.error(
            `${this.secondFighter.Type} ${this.secondFighter.toString()} is Farmer. He quit from the game`,
          );
          this.logger.info(` -------------------------------
          ${this.firstFighter.toString()} has won!
                                                               `);
          return this.firstFighter;
        } else {
          this.logger.error(
            `${this.firstFighter.Type} ${this.firstFighter.toString()} can't attack. He quit from the game`,
          );
          this.logger.info(` -------------------------------
          ${this.secondFighter.toString()} has won!
                                                               `);
          return this.secondFighter;
        }
      }
      if (this.secondFighter.Health <= 0) {
        winner = this.firstFighter;
        break;
      }

      attack.checkAttack(this.secondFighter, this.firstFighter);
      if (this.firstFighter.Health <= 0) {
        winner = this.secondFighter;
        break;
      }
    }
    this.logger.info(` -------------------------------
    ${winner.toString()} has won!
                                                         `);
    return winner;
  }

  whoIsFirst(): boolean {
    return Boolean(Math.floor(Math.random() * 2));
  }
}
