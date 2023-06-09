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
  beforeAll(() => {
    logger = new Logger();
  });
  beforeEach(() => {
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
  let duel: Duel;
  let heroPair: HeroPairs;
  beforeAll(() => {
    logger = new Logger();
  });
  it('the winner is attacker', () => {
    attacker = new Archer('Archer', 'Tom', 'Jonson', 38, 100, logger);
    opponent = new Wizard('Wizard', 'Sam', 'Jonson', 24, 60, logger);
    heroPair = new HeroPairs(attacker, opponent);
    duel = new Duel(heroPair, logger);

    winner = duel.startDuel();
    expect(attacker).toBe(winner);
  });
});

describe('pass all checks and perform the attack', () => {
  let attacker: Knight;
  let opponent: Knight;
  let logger: Logger;
  let heroPair: HeroPairs;
  let duel: Duel;
  let damage: number;
  beforeAll(() => {
    logger = new Logger();
  });
  beforeEach(() => {
    attacker = new Knight('Knight', 'Sam', 'Jonson', 34, 80, logger);
    opponent = new Knight('Knight', 'Tom', 'Jonson', 24, 88, logger);
    heroPair = new HeroPairs(attacker, opponent);
    duel = new Duel(heroPair, logger);
    damage = 0.3;
  });
  it('should be successful comlpleted', () => {
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
