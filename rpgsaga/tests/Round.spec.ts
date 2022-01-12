import { Duel } from '../src/Duel';
import { Hero } from '../src/Hero';
import { Archer } from '../src/Heroes/Archer';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroPairs } from '../src/HeroPairs';
import { Logger } from '../src/Logger';

describe('winnerHero', () => {
  let logger;
  beforeEach(() => {
    logger = new Logger();
  });
  it('is an instance of a class Hero', () => {
    const hero1 = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    const hero2 = new Wizard('Wizard', 'Tom', 'Tailor', 35, 90, logger);
    const heroPairs = new HeroPairs(hero1, hero2);
    const duel = new Duel(heroPairs, logger);
    const winnerHero = duel.startDuel();
    expect(winnerHero).toBeInstanceOf(Hero);
  });
});
