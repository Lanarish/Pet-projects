import { Logger } from '../src/Logger';
import { FireArrows } from '../src/Super_Powers/FireArrows';
import { Archer } from '../src/Heroes/Archer';

describe('Check Archer :', () => {
  let logger;
  let archer;
  let superpower;
  beforeEach(() => {
    logger = new Logger();
    archer = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    superpower = new FireArrows(logger);
  });
  it('status is false before each start', () => {
    expect(superpower.SuperPowerInRoundStatus).toBeFalsy();
    expect(superpower.SuperPowerJustNow).toBeFalsy();
  });
  it('change status after used superpower ', () => {
    archer.superPower.useSuperPower(archer, archer);
    expect(archer.superPower.SuperPowerInRoundStatus).toBeTruthy();
    expect(archer.superPower.SuperPowerJustNow).toBeTruthy();
  });
});
