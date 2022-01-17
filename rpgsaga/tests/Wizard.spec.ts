import { Duel } from '../src/Duel';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroPairs } from '../src/HeroPairs';
import { Logger } from '../src/Logger';

describe('Wizard does not lose health after using superpower', () => {
  let logger: Logger;
  beforeEach(() => {
    logger = new Logger();
  });
  it('should stay the same', () => {
    const firstHero = new Wizard('Wizard', 'Sam', 'Buche', 45, 89, logger);
    const secondHero = new Wizard('Wizard', 'Tom', 'Drago', 35, 99, logger);
    const heroPairs = new HeroPairs(firstHero, secondHero);
    const duel = new Duel(heroPairs, logger);

    firstHero.superPower.useSuperPower(firstHero, secondHero);

    expect(firstHero.superPower.SuperPowerInRoundStatus).toBeTruthy();
    expect(firstHero.superPower.SuperPowerJustNow).toBeTruthy();
  });
});
