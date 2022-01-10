import { Logger } from '../src/Logger';
import { Nemesis } from '../src/Super_Powers/Nemesis';

describe('Check that an object', () => {
  it('is an instance of a class Nemesis', () => {
    const logger = new Logger();
    const fireArrows = new Nemesis(logger);
    expect(fireArrows).toBeInstanceOf(Nemesis);
  });
});
