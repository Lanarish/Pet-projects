import { Duel } from './Duel';

const duel = new Duel();
export class Round {
  numberOfRound: number;
  winnersList: string[];
  newPairs: [number, number][];

  startRound(pairsArray) {
    pairsArray.forEach(pair => duel.startDuel(pair));
  }
}
