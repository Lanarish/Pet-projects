import { Duel } from '../src/Duel';
import { Hero } from '../src/Hero';
import { Archer } from '../src/Heroes/Archer';
import { Knight } from '../src/Heroes/Knight';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroPairs } from '../src/HeroPairs';
import { Logger } from '../src/Logger';

describe('attackChecker function:', () => {
  let logger;
  let firstHero;
  let secondHero;
  let heroPair;
  let duel;
  beforeEach(() => {
    logger = new Logger();
    firstHero = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    secondHero = new Wizard('Wizard', 'Sam', 'Jonson', 34, 80, logger);
    heroPair = new HeroPairs(firstHero, secondHero);
    duel = new Duel(heroPair, logger);
  });
  it('check that Wizard superPowerJustNow is false', () => {
    duel.attackChecker(firstHero, secondHero);
    expect(secondHero.superPower.SuperPowerJustNow).toBeFalsy();
  });
  it('check that after use superPower the superPowerJustNow is true', () => {
    secondHero.superPower.useSuperPower(secondHero);
    expect(secondHero.superPower.SuperPowerJustNow).toBeTruthy();
  });
  it('check that after use onse superPower the superPowerJustNow is false again', () => {
    secondHero.superPower.useSuperPower(secondHero);
    duel.attackChecker(firstHero, secondHero);
    expect(secondHero.superPower.SuperPowerJustNow).toBeFalsy();
  });
});
describe('Check that at getDamage function opponents health', () => {
  let attacker: Archer;
  let opponent: Wizard;
  let logger: Logger;
  beforeEach(() => {
    attacker = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    opponent = new Wizard('Wizard', 'Sam', 'Jonson', 34, 80, logger);
  });
  it('decreases exactly by the attackers power', () => {
    opponent.getDamage(attacker.Power);
    const newOpponentHealth = opponent.Health;
    expect(newOpponentHealth).toEqual(opponent.StartHealth - attacker.Power);
  });
});

describe('Check that if opponent health less or equal 0', () => {
  let attacker: Archer;
  let opponent: Wizard;
  let logger: Logger;
  let winner: Hero;
  beforeEach(() => {
    attacker = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    opponent = new Wizard('Wizard', 'Sam', 'Jonson', 34, 33, logger);
  });
  it('the winner is attacker', () => {
    opponent.getDamage(attacker.Power);
    const newOpponentHealth = opponent.Health;
    if (newOpponentHealth <= 0) {
      winner = attacker;
    }
    expect(attacker).toBe(winner);
  });
});

describe('pass all checks and perforn the attack', () => {
  let attacker: Knight;
  let opponent: Knight;
  let logger: Logger;
  let heroPair;
  let duel;
  let damage: number;

  beforeEach(() => {
    attacker = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    opponent = new Knight('Knight', 'Tom', 'Jonson', 24, 83, logger);
    heroPair = new HeroPairs(attacker, opponent);
    logger = new Logger();
    duel = new Duel(heroPair, logger);
    damage = 0.3;
  });
  it('should be successful', () => {
    duel.attackChecker(attacker, opponent);
    if (attacker.superPower.SuperPowerJustNow === false) {
      expect(opponent.Health).toBe(opponent.StartHealth - attacker.Power);
    } else {
      if (attacker instanceof Archer && attacker.superPower.SuperPowerJustNow) {
        expect(opponent.Health).toBe(opponent.StartHealth);
      } else if (attacker instanceof Knight && attacker.superPower.SuperPowerJustNow) {
        expect(opponent.Health).toBe(opponent.StartHealth - attacker.Power - Math.floor(attacker.Power * damage));
      } else {
        expect(opponent.Health).toBe(opponent.StartHealth - attacker.Power);
      }
    }
  });
});
