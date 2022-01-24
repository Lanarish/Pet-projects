import { createLogger, transports } from 'winston';

import { Hero } from './Hero';
import { Pair } from './Pair';

// const logger = createLogger({
//   transports: [
//     new transports.File({
//       filename: 'logger.log',
//       options: { flags: 'w' },
//     }),
//   ],
// });
export class Logger {
  private logger;
  constructor() {
    this.logger = createLogger({
      transports: [
        new transports.File({
          filename: 'logger.log',
          options: { flags: 'w' },
        }),
      ],
    });
  }

  error(errorText: string) {
    this.logger.error(`ERROR!  ${errorText}`);
  }
  startGame() {
    this.logger.info(`Start game!`);
  }
  numberOfHeroes(number: number) {
    this.logger.info(`The number of heroes for game is ${number}`);
  }
  infoAboutPair(pairsArray: Pair<Hero>, index: number) {
    this.logger.info(`
    There are pairs of heroes:`);
    this.logger.info(
      `Pair №${index + 1} is ${pairsArray.first.Type} ${pairsArray.first.toString()}  vs ${
        pairsArray.second.Type
      } ${pairsArray.second.toString()}`,
    );
  }
  duelStart(a, b) {
    this.logger.info(
      `     
      | The duel between ${a.type} ${a.name} ${a.lastName} and ${b.type} ${b.name} ${b.lastName} has started! |
                                                                                                   
      `,
    );
  }
  firstTurn(fighter) {
    this.logger.info(`${fighter.name} ${fighter.lastName} attacks first.`);
  }

  gameProcess(a: Hero, b: Hero) {
    this.logger.info(
      `${a.toString()} struck a blow in ${a.Power} points => ${b.toString()}'s remaining health is ${b.Health} points.`,
    );
  }

  showWinner(a: Hero) {
    this.logger.info(` -------------------------------
    ${a.toString()} has won!
                                                         `);
  }

  showWinnerList(winnerList) {
    this.logger.info(`THE WINNER OF THE GAME IS ${winnerList[0].toString()}! CONGRATULATIONS!!!`);
  }

  roundNumber(number: number) {
    this.logger.info(`ROUND #${[number + 1]}`);
  }
  roundStart() {
    this.logger.info(`ROUND START!`);
  }

  roundEnd() {
    this.logger.info(`ROUND END!`);
  }
  useBewitchment(fighter: Hero) {
    this.logger.info(`* ${fighter.toString()} use Bewitchment! *`);
  }
  missTurn(fighter: Hero) {
    this.logger.info(`* ${fighter.toString()} miss turn *`);
  }
  useFireArrows(fighter: Hero) {
    this.logger.info(`* ${fighter.toString()} use FireArrows! *`);
  }
  useNemesis(fighter: Hero, opponent: Hero) {
    this.logger.info(
      `* ${fighter.toString()} use Nemesis! ${opponent.toString()} remaining health is ${opponent.Health} *`,
    );
  }
  usedFireArrowsEffect(fighter: Hero) {
    this.logger.info(
      `* ${fighter.toString()} lost his health becouse of FireArrows! His health is ${fighter.Health} now. *`,
    );
  }
}
