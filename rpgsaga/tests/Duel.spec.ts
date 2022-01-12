import { Duel } from '../src/Duel';
import { Archer } from '../src/Heroes/Archer';
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
describe('', () => {
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
  it('', () => {
    const firstHeroHealth = firstHero.Health;
    const secondHeroPower = secondHero.Power;
    const res = firstHeroHealth - secondHeroPower;
    duel.attackPreparation(firstHero, secondHero);
    firstHero.getDamage(secondHeroPower);
    expect(firstHero.getDamage(secondHeroPower)).toBe(res);
  });
});
