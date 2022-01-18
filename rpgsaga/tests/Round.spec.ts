import { Archer } from '../src/Heroes/Archer';
import { Logger } from '../src/Logger';
import { Round } from '../src/Round';

describe('Check if in runRound function', () => {
  let logger;
  let round;
  const i = 1;
  beforeEach(() => {
    logger = new Logger();
    round = new Round(i, logger);
  });
  it('comes null value instead of pairArray', () => {
    const array = [null];
    const res = round.runRound(array);

    expect(res).toStrictEqual([]);
  });

  it('comes null value instead of firstHero and valid value of secondHero', () => {
    const archer = new Archer('Archer', 'Sam', 'Jonson', 30, 80, logger);

    const array = [{ firstHero: null, secondHero: archer }];
    const res = round.runRound(array);

    expect(res).toStrictEqual([]);
  });

  it('comes underfined', () => {
    const array = undefined;
    const res = round.runRound(array);

    expect(res).toStrictEqual(undefined);
  });
});
