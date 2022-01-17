import { Logger } from '../src/Logger';
import { FireArrows } from '../src/Super_Powers/FireArrows';
import { Archer } from '../src/Heroes/Archer';
import { Duel } from '../src/Duel';
import { HeroPairs } from '../src/HeroPairs';

const ADD_DAMAGE_TEST = 2;

describe('Check Archer :', () => {
  let logger;
  let attacker;
  let opponent;
  let superpower;
  let duel;
  let heroPair;
  beforeAll(() => {
    logger = new Logger();
  });
  beforeEach(() => {
    attacker = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    opponent = new Archer('Archer', 'Tom', 'Jackson', 14, 90, logger);
    superpower = new FireArrows(logger);
    heroPair = new HeroPairs(attacker, opponent);
    duel = new Duel(heroPair, logger);
  });
  it('status is false before each start', () => {
    expect(superpower.SuperPowerInRoundStatus).toBeFalsy();
    expect(superpower.SuperPowerJustNow).toBeFalsy();
  });
  it('change status after used superpower ', () => {
    attacker.superPower.useSuperPower(attacker, opponent);
    expect(attacker.superPower.SuperPowerInRoundStatus).toBeTruthy();
    expect(attacker.superPower.SuperPowerJustNow).toBeTruthy();
  });

  it('increace his damage in 2 points if he use SuperPower', () => {
    let oldHealth = opponent.Health;
    attacker.superPower.useSuperPower(attacker, opponent);
    duel.attackChecker(attacker, opponent);
    opponent.getDamage(attacker.Power);
    expect(opponent.Health).toEqual(oldHealth - (attacker.Power + ADD_DAMAGE_TEST));
    oldHealth = opponent.Health;
    duel.attackChecker(attacker, opponent);
    expect(opponent.Health).toEqual(oldHealth - (attacker.Power + ADD_DAMAGE_TEST));
    oldHealth = opponent.Health;
    duel.attackChecker(attacker, opponent);
    expect(opponent.Health).toEqual(oldHealth - (attacker.Power + ADD_DAMAGE_TEST));
  });
});
