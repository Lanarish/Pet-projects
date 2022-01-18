import { Duel } from '../src/Duel';
import { Hero } from '../src/Hero';
import { Archer } from '../src/Heroes/Archer';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroPairs } from '../src/HeroPairs';
import { Logger } from '../src/Logger';

describe('Check that after restoreHealth function', () => {
  let attacker: Archer;
  let opponent: Wizard;
  let logger: Logger;
  let duel: Duel;
  let heroPair: HeroPairs;
  beforeAll(() => {
    logger = new Logger();
  });
  beforeEach(() => {
    attacker = new Archer('Archer', 'Sam', 'Jonson', 35, 80, logger);
    opponent = new Wizard('Wizard', 'Sam', 'Jonson', 30, 60, logger);
    heroPair = new HeroPairs(attacker, opponent);
    duel = new Duel(heroPair, logger);
  });
  it('the winner health is restore', () => {
    duel.startDuel();
    attacker.restoreHealth();
    expect(attacker.Health).toBe(attacker.StartHealth);
  });
});

describe('to String function', () => {
  const hero = new Hero('Archer', 'Sam', 'Jonson', 35, 80);
  it('show just name and first letter of lastName of hero', () => {
    hero.toString();
    expect(hero.toString()).toBe(`${hero.FirstName} ${hero.LastName.substring(0, 1)}.`);
  });
});
