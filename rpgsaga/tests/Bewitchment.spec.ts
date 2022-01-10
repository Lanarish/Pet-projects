import { Logger } from '../src/Logger';
import { Bewitchment } from '../src/Super_Powers/Bewitchment';

describe('Check that an object', () => {
  it('is an instance of a class Bewitchment', () => {
    const logger = new Logger();
    const fireArrows = new Bewitchment(logger);
    expect(fireArrows).toBeInstanceOf(Bewitchment);
  });
});
