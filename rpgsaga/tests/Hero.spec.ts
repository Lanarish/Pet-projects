import { Generator } from '../src/Generator';
import { Hero } from '../src/Hero';

let hero;
let random;
let logger;
beforeEach(() => {
  hero = new Hero('Archer', 'Sam', 'Jonson', 34, 80);
  random = new Generator(logger);
});

describe('Name function:', () => {
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

  it('should be return string', () => {
    const name = typeof hero.FirstName;
    expect(name).toEqual('string');
  });
  output.forEach(player => {
    it('returns name from array', () => {
      const res = random.initRandomHeroName();
      expect(player.names).toContain(res);
    });
  });
});
describe('LastName function:', () => {
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
  it('should be return string', () => {
    const lastName = typeof hero.LastName;
    expect(lastName).toEqual('string');
  });
  output.forEach(player => {
    it('returns on of the lastName from array', () => {
      const res = random.initRandomHeroLastName();
      expect(player.lastNames).toContain(res);
    });
  });
});
describe('Power function:', () => {
  const testCases = [
    {
      from: 15,
      to: 35,
    },
  ];

  it('should be return number', () => {
    const power = typeof hero.Power;
    expect(power).toEqual('number');
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
  const testCases = [
    {
      from: 70,
      to: 100,
    },
  ];
  it('should be return number', () => {
    const health = typeof hero.Health;
    expect(health).toEqual('number');
  });
  testCases.forEach(test => {
    it(`return number in the range from:${test.from} to:${test.to}`, () => {
      const res = random.initRandomHeroHealth();
      expect(res).toBeGreaterThanOrEqual(test.from);
      expect(res).toBeLessThanOrEqual(test.to);
    });
  });
});
