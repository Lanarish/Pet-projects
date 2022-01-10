import { Duel } from '../src/Duel';
import { Archer } from '../src/Heroes/Archer';
import { HeroPairs } from '../src/HeroPairs';
import { Logger } from '../src/Logger';

let logger;
let firstHero;
let secondHero;
let heroPair;
let duel;
beforeEach(() => {
  logger = new Logger();
  firstHero = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
  secondHero = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
  heroPair = new HeroPairs(firstHero, secondHero);
  duel = new Duel(heroPair, logger);
});

describe('whoIsFirst function', () => {
  it('return boolean value', () => {
    const result = typeof duel.whoIsFirst();
    expect(result).toEqual('boolean');
  });
});
