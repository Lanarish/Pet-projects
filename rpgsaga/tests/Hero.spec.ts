import { Generator } from '../src/Generator';
import { Hero } from '../src/Hero';
import { Archer } from '../src/Heroes/Archer';
import { Wizard } from '../src/Heroes/Wizard';
import { Logger } from '../src/Logger';

describe('Name function:', () => {
  let hero: Hero;
  let random: Generator;
  let logger: Logger;
  beforeEach(() => {
    hero = new Hero('Archer', 'Sam', 'Jonson', 34, 80);
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

  it('should be return name', () => {
    const name = 'Sam';
    expect(hero.FirstName).toEqual(name);
  });
  output.forEach(player => {
    it('returns name from array', () => {
      const res = random.initRandomHeroName();
      expect(player.names).toContain(res);
    });
  });
});
describe('LastName function:', () => {
  let hero;
  let random;
  let logger;
  beforeEach(() => {
    hero = new Hero('Archer', 'Sam', 'Jonson', 34, 80);
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
  it('should be return lastName', () => {
    const lastName = 'Jonson';
    expect(hero.lastName).toEqual(lastName);
  });
  output.forEach(player => {
    it('returns on of the lastName from array', () => {
      const res = random.initRandomHeroLastName();
      expect(player.lastNames).toContain(res);
    });
  });
});
describe('Power function:', () => {
  let hero;
  let random;
  let logger;
  beforeEach(() => {
    hero = new Hero('Archer', 'Sam', 'Jonson', 34, 80);
    random = new Generator(logger);
  });
  const testCases = [
    {
      from: 15,
      to: 35,
    },
  ];

  it('should be return number', () => {
    const power = 34;
    expect(hero.Power).toEqual(power);
  });

  testCases.forEach(test => {
    it(`return number in the range from:${test.from} to:${test.to}`, () => {
      const res = random.initRandomHeroPower();
      expect(res).toBeGreaterThanOrEqual(test.from);
      expect(res).toBeLessThanOrEqual(test.to);
    });
  });
});
describe('Health function:', () => {
  let hero: Hero;
  let random: Generator;
  let logger: Logger;
  beforeEach(() => {
    hero = new Hero('Archer', 'Sam', 'Jonson', 34, 80);
    random = new Generator(logger);
  });
  const testCases = [
    {
      from: 70,
      to: 100,
    },
  ];
  it('should be return health', () => {
    const health = 80;
    expect(hero.Health).toEqual(health);
  });
  testCases.forEach(test => {
    it(`return number in the range from:${test.from} to:${test.to}`, () => {
      const res = random.initRandomHeroHealth();
      expect(res).toBeGreaterThanOrEqual(test.from);
      expect(res).toBeLessThanOrEqual(test.to);
    });
  });
});
describe('', () => {
  let attacker: Archer;
  let opponent: Wizard;
  let logger: Logger;
  beforeEach(() => {
    attacker = new Archer('Archer', 'Sam', 'Jonson', 34, 80, logger);
    opponent = new Wizard('Wizard', 'Sam', 'Jonson', 34, 80, logger);
  });
  it('', () => {
    const firstHeroHealth = opponent.Health;
    const secondHeroPower = attacker.Power;
    opponent.getDamage(secondHeroPower);
    const newHealth = opponent.Health;
    expect(newHealth).toEqual(firstHeroHealth - secondHeroPower);
  });
});
