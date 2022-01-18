import { Logger } from '../src/Logger';
import { Bewitchment } from '../src/Super_Powers/Bewitchment';

describe('Check that an object', () => {
  let logger;
  beforeAll(() => {
    logger = new Logger();
  });
  it('is an instance of a class Bewitchment', () => {
    const fireArrows = new Bewitchment(logger);
    expect(fireArrows).toBeInstanceOf(Bewitchment);
  });
});
