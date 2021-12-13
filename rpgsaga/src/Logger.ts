export class Logger {
  info(newHeroArray) {
    console.log('Pairs of heroes:', newHeroArray);
  }

  game(a, b, pairsArray) {
    console.log(
      `${pairsArray[a].name} struck a blow in ${pairsArray[a].power} points. ${pairsArray[b].name}'s remaining health is ${pairsArray[b].health} points`,
    );
  }
  stopDuel(pairsArray, a) {
    console.log(`${pairsArray[a].name} has won!
    #####################################################`);
  }
  error() {
    console.log('N');
  }
}
