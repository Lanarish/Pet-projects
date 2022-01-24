import { Hero } from './Hero';
import { Pair } from './Pair';

export class Logger {
  error(errorText: string) {
    console.error(`ERROR!  ${errorText}`);
  }
  startGame() {
    console.log(`Start game!`);
  }
  infoAboutPair(pairsArray: Pair<Hero>, index: number) {
    console.log(`
    There is pair of heroes:`);
    console.log(
      `Pair №${index + 1} is ${pairsArray.first.Type} ${pairsArray.first.toString()}  vs ${
        pairsArray.second.Type
      } ${pairsArray.second.toString()}`,
    );
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
    console.log(`THE WINNER OF THE GAME IS ${winnerList[0].toString()}! CONGRADULATIONS!!!`);
  }

  roundNumber(number: number) {
    console.log(`ROUND #${[number + 1]}`);
  }

  useBewitchment(fighter: Hero) {
    console.log(`* ${fighter.toString()} use Bewitchment! *`);
  }
  missTurn(fighter: Hero) {
    console.log(`* ${fighter.toString()} miss turn *`);
  }
  useFireArrows(fighter: Hero) {
    console.log(`* ${fighter.toString()} use FireArrows! *`);
  }
  useNemesis(fighter: Hero, opponent: Hero) {
    console.log(`* ${fighter.toString()} use Nemesis! ${opponent.toString()} remaining health is ${opponent.Health} *`);
  }
  usedFireArrowsEffect(fighter: Hero) {
    console.log(
      `* ${fighter.toString()} lost his health becouse of FireArrows! His health is ${fighter.Health} now. *`,
    );
  }
}
