import { Hero } from './Hero';
import { Archer } from './Heroes/Archer';
import { Farmer } from './Heroes/Farmer';
import { Wizard } from './Heroes/Wizard';
import { HeroPairs } from './HeroPairs';
import { Logger } from './Logger';

const ADD_DAMAGE = 2;
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
  startDuel(): Hero {
    this.logger.duelStart(this.firstFighter, this.secondFighter);
    this.logger.firstTurn(this.firstFighter);
    let winner: Hero;
    while (this.firstFighter.Health && this.secondFighter.Health) {
      this.attackChecker(this.firstFighter, this.secondFighter);
      if (this.secondFighter.Health <= 0) {
        winner = this.firstFighter;
        break;
      }

      this.attackChecker(this.secondFighter, this.firstFighter);
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
  attackChecker(attacker: Hero, opponent: Hero) {
    try {
      if (attacker instanceof Farmer) {
        attacker.Power = 0;
        throw new Error('Error1');
      }
      if (opponent instanceof Farmer) {
        opponent.Health = 0;
        throw new Error('Error2');
      }
      if (opponent instanceof Wizard && opponent.superPower.SuperPowerJustNow) {
        this.logger.missTurn(attacker);
        opponent.superPower.SuperPowerJustNow = false;
      }
      this.attackPreparation(attacker, opponent);
    } catch (error) {
      if (error.message === 'Error1') {
        console.error(`${attacker.toString()} is Farmer. He can't attack`);
      }
      if (error.message === 'Error2') {
        console.error(`${opponent.toString()} is Farmer. He quits from the game`);
      }
    }
  }

  attackPreparation(attacker: Hero, opponent: Hero) {
    if (!attacker.superPower.SuperPowerInRoundStatus) {
      const chance: number = Math.floor(Math.random() * 3);
      if (chance === 3 || chance === 2) {
        attacker.superPower.useSuperPower(attacker, opponent);
      }
    }
    if (attacker instanceof Archer && attacker.superPower.SuperPowerInRoundStatus) {
      opponent.Health = opponent.Health - ADD_DAMAGE;
      this.logger.usedFireArrowsEffect(opponent);
    }

    if (attacker instanceof Archer && attacker.superPower.SuperPowerJustNow) {
      attacker.superPower.SuperPowerJustNow = false;
    } else {
      opponent.getDamage(attacker.Power);
      this.logger.gameProcess(attacker, opponent);
    }
  }
}
