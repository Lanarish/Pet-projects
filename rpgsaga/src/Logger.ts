import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';

export class Logger {
  info(pairsArray: HeroPairs[]) {
    console.log('There are pairs of heroes:');
    for (let i = 0; i < pairsArray.length; i++) {
      console.log(
        `Pair №${[i + 1]} is ${pairsArray[i].firstHero.type} ${pairsArray[i].firstHero.name} ${
          pairsArray[i].firstHero.lastName
        } vs ${pairsArray[i].secondHero.type} ${pairsArray[i].secondHero.name} ${pairsArray[i].secondHero.lastName}`,
      );
    }
  }
  duelStart(a, b) {
    console.log(
      `
      The duel between ${a.type} ${a.name} ${a.lastName} and ${b.type} ${b.name} ${b.lastName} has started!
                                                                                                   `,
    );
  }
  first(fighter) {
    console.log(`${fighter.name} ${fighter.lastName} attacks first.`);
  }
  game(a: Hero, b: Hero) {
    console.log(
      `${a.name} ${a.lastName} struck a blow in ${a.power} points. ${b.name} ${b.lastName}'s remaining health is ${b.health} points.`,
    );
  }
  stopDuel(a: Hero) {
    console.log(` -------------------------------
    ${a.name} ${a.lastName} has won!
                                                         `);
  }
  error() {
    console.log('N');
  }
}
