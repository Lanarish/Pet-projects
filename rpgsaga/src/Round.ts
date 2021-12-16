import { Duel } from './Duel';

const duel = new Duel();
export class Round {
  numberOfRound: number;
  winnersList: string[];

  startRound(pairsArray) {
    pairsArray.forEach(pair => duel.startDuel(pair));
  }
}
