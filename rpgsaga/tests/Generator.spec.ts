import { Generator } from '../src/Generator';
import { Hero } from '../src/Hero';
import { Archer } from '../src/Heroes/Archer';
import { Knight } from '../src/Heroes/Knight';
import { Wizard } from '../src/Heroes/Wizard';
import { HeroTypes } from '../src/HeroTypes';
import { Logger } from '../src/Logger';

describe('Test random number from:', () => {
  let logger;
  let random;
  beforeEach(() => {
    logger = new Logger();
    random = new Generator(logger);
  });

  const testCase = {
    from: 15,
    to: 35,
  };

  it(`initRandomHeroPower function. Range from:${testCase.from} to:${testCase.to}`, () => {
    const res = random.initRandomHeroPower();
    expect(res).toBeGreaterThanOrEqual(testCase.from);
    expect(res).toBeLessThanOrEqual(testCase.to);
  });
});

describe('Test random number from:', () => {
  let logger;
  let random;
  beforeEach(() => {
    logger = new Logger();
    random = new Generator(logger);
  });

  const testCase = {
    from: 70,
    to: 100,
  };

  it(`initRandomHeroHealth function. Range from:${testCase.from} to:${testCase.to}`, () => {
    const res = random.initRandomHeroHealth();
    expect(res).toBeGreaterThanOrEqual(testCase.from);
    expect(res).toBeLessThanOrEqual(testCase.to);
  });
});

describe('Test random hero:', () => {
  let logger;
  let random;
  beforeEach(() => {
    logger = new Logger();
    random = new Generator(logger);
  });

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
  let logger;
  let random;
  beforeEach(() => {
    logger = new Logger();
    random = new Generator(logger);
  });

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
  let logger: Logger;
  let random: Generator;
  let name: string;
  let lastName: string;
  let power: number;
  let health: number;
  beforeEach(() => {
    logger = new Logger();
    random = new Generator(logger);
    name = 'Tom';
    lastName = 'Brendibug';
    power = 23;
    health = 80;
  });

  it('return hero of class Wizard', () => {
    const res: Hero = random.initHeroType(HeroTypes.Wizard, name, lastName, power, health);
    expect(res).toBeInstanceOf(Wizard);
  });
  it('return hero of class Archer', () => {
    const res: Hero = random.initHeroType(HeroTypes.Archer, name, lastName, power, health);
    expect(res).toBeInstanceOf(Archer);
  });
  it('return hero of class Knight', () => {
    const res: Hero = random.initHeroType(HeroTypes.Knight, name, lastName, power, health);
    expect(res).toBeInstanceOf(Knight);
  });
  it('passed the right name of hero', () => {
    const initType = random.initHeroType(HeroTypes.Wizard, name, lastName, power, health);
    expect(initType.FirstName).toBe(name);
  });
  it('passed the right lastName of hero', () => {
    const initType = random.initHeroType(HeroTypes.Wizard, name, lastName, power, health);
    expect(initType.LastName).toBe(lastName);
  });
  it('passed the right number of power', () => {
    const initType = random.initHeroType(HeroTypes.Wizard, name, lastName, power, health);
    expect(initType.Power).toBe(power);
  });
  it('passed the right number of health', () => {
    const initType = random.initHeroType(HeroTypes.Wizard, name, lastName, power, health);
    expect(initType.Health).toBe(health);
  });
});
