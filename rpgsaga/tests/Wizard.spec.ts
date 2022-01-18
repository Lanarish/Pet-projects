import { Duel } from '../src/Duel';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroPairs } from '../src/HeroPairs';
import { Logger } from '../src/Logger';

describe('Wizard ', () => {
  let logger: Logger;
  let attacker;
  let opponent;
  let duel;
  let heroPair;
  beforeAll(() => {
    logger = new Logger();
    attacker = new Wizard('Wizard', 'Sam', 'Buche', 40, 90, logger);
    opponent = new Wizard('Wizard', 'Tom', 'Drago', 30, 100, logger);
    heroPair = new HeroPairs(attacker, opponent);
    duel = new Duel(heroPair, logger);
  });
  it(' SuperPowerInRoundStatus and SuperPowerJustNow change their value from false to true after use', () => {
    attacker.superPower.useSuperPower(attacker, opponent);

    expect(attacker.superPower.SuperPowerInRoundStatus).toBeTruthy();
    expect(attacker.superPower.SuperPowerJustNow).toBeTruthy();
  });
  it('does not lose health after using superpower in duel', () => {
    attacker.superPower.useSuperPower(attacker, opponent);
    duel.attackChecker(attacker, opponent);
    duel.attackChecker(opponent, attacker);
    expect(attacker.StartHealth).toEqual(attacker.Health);
  });
});
