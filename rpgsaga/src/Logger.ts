import { Hero } from './Hero';
import { HeroPairs } from './HeroPairs';

export class Logger {
  startGame() {
    console.log(`Start game!`);
  }
  infoAboutPairs(pairsArray: HeroPairs[]) {
    console.log(`
    There are pairs of heroes:`);
    for (let i = 0; i < pairsArray.length; i++) {
      console.log(
        `Pair №${[i + 1]} is ${pairsArray[i].firstHero.Type} ${pairsArray[i].firstHero.toString()}  vs ${
          pairsArray[i].secondHero.Type
        } ${pairsArray[i].secondHero.toString()}`,
      );
    }
  }
  duelStart(a, b) {
    console.log(
      `     
      | The duel between ${a.type} ${a.name} ${a.lastName} and ${b.type} ${b.name} ${b.lastName} has started! |
                                                                                                   
      `,
    );
  }
  firstTurn(fighter) {
    console.log(`${fighter.name} ${fighter.lastName} attacks first.`);
  }
  gameProcess(a: Hero, b: Hero) {
    console.log(
      `${a.toString()} struck a blow in ${a.Power} points => ${b.toString()}'s remaining health is ${b.Health} points.`,
    );
  }

  showWinner(a: Hero) {
    console.log(` -------------------------------
    ${a.toString()} has won!
                                                         `);
  }

  showWinnerList(winnerList) {
    console.log(`THE WINNER OF THE GAME IS ${winnerList[0].name} ${winnerList[0].lastName}! CONGRADULATIONS!!!`);
  }

  roundNumber(number) {
    console.log(`ROUND #${[number + 1]}`);
  }
}
