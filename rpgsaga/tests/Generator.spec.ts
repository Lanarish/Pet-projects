import { Generator } from '../src/Generator';
import { Hero } from '../src/Hero';
import { Archer } from '../src/Heroes/Archer';
import { Knight } from '../src/Heroes/Knight';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroTypes } from '../src/HeroTypes';
import { Logger } from '../src/Logger';

let logger;
let random;
beforeEach(() => {
  logger = new Logger();
  random = new Generator(logger);
});

describe('Test random number from:', () => {
  const testCases = [
    {
      from: 15,
      to: 35,
    },
  ];
  testCases.forEach(test => {
    it(`initRandomHeroPower function. Range from:${test.from} to:${test.to}`, () => {
      const res = random.initRandomHeroPower();
      expect(res).toBeGreaterThanOrEqual(test.from);
      expect(res).toBeLessThanOrEqual(test.to);
    });
  });
});
describe('Test random number from:', () => {
  const testCases = [
    {
      from: 70,
      to: 100,
    },
  ];
  testCases.forEach(test => {
    it(`initRandomHeroHealth function. Range from:${test.from} to:${test.to}`, () => {
      const res = random.initRandomHeroHealth();
      expect(res).toBeGreaterThanOrEqual(test.from);
      expect(res).toBeLessThanOrEqual(test.to);
    });
  });
});
describe('Test random hero:', () => {
  const output = [
    {
      names: [
        'Vesemir',
        'Geralt',
        'Lyutik',
        'Aragorn',
        'Legolas',
        'Gimli',
        'Boromir',
        'Faramir',
        'Gandalf',
        'Frodo',
        'Sam',
        'Peregrin',
        'Meriadoc',
        'Radagast',
        'Thorin',
        'Elrond',
      ],
    },
  ];
  output.forEach(hero => {
    it('name, use initRandomHeroName function return one of the name from array', () => {
      const res = random.initRandomHeroName();
      expect(hero.names).toContain(res);
    });
  });
});
describe('Test random hero:', () => {
  const output = [
    {
      lastNames: [
        'Brandybuck',
        'Prier',
        'Jonson',
        'Jackson',
        'Bushe',
        'Gramm',
        'Took',
        'Tudor',
        'Oakenshield',
        'Merigold',
      ],
    },
  ];
  output.forEach(hero => {
    it('lastName, use initRandomHeroLastName function return one of the lastName from array', () => {
      const res = random.initRandomHeroLastName();
      expect(hero.lastNames).toContain(res);
    });
  });
});
describe('Test initHeroType function:', () => {
  const wizard = HeroTypes.Wizard;
  const archer = HeroTypes.Archer;
  const knight = HeroTypes.Knight;
  const name = 'Tom';
  const lastName = 'Brendibug';
  const power = 23;
  const health = 80;
  it('return hero of class Wizard', () => {
    const res: Hero = random.initHeroType(wizard, name, lastName, power, health);
    expect(res).toBeInstanceOf(Wizard);
  });
  it('return hero of class Archer', () => {
    const res: Hero = random.initHeroType(archer, name, lastName, power, health);
    expect(res).toBeInstanceOf(Archer);
  });
  it('return hero of class Knight', () => {
    const res: Hero = random.initHeroType(knight, name, lastName, power, health);
    expect(res).toBeInstanceOf(Knight);
  });
});
