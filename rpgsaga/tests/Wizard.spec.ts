import { Duel } from '../src/Duel';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroPairs } from '../src/HeroPairs';
import { Logger } from '../src/Logger';

let logger;
beforeEach(() => {
  logger = new Logger();
});
describe('Wizard does not lose health after using superpower', () => {
  it('should stay the same', () => {
    // Arrange
    const firstHero = new Wizard('Wizard', 'Sam', 'Buche', 45, 89, logger);
    const secondHero = new Wizard('Wizard', 'Tom', 'Drago', 35, 99, logger);
    const heroPairs = new HeroPairs(firstHero, secondHero);
    const duel = new Duel(heroPairs, logger);
    // Act
    firstHero.superPower.useSuperPower(firstHero, secondHero);
    duel.attackChecker(firstHero, secondHero);
    // Assert
    expect(firstHero.superPower.SuperPowerInRoundStatus).toBeTruthy();
    expect(firstHero.superPower.SuperPowerJustNow).toBeTruthy();
  });
});
