import { Logger } from '../src/Logger';
import { FireArrows } from '../src/Super_Powers/FireArrows';

describe('Check that an object', () => {
  it('is an instance of a class FireArrows', () => {
    const logger = new Logger();
    const fireArrows = new FireArrows(logger);
    expect(fireArrows).toBeInstanceOf(FireArrows);
  });
});
