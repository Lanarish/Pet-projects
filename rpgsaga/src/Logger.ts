export class Logger {
  info(newHeroArray) {
    console.log('Pairs of heroes:', newHeroArray);
  }

  game(a, b) {
    console.log(`${a.name} struck a blow in ${a.power} points. ${b.name}'s remaining health is ${b.health} points`);
  }
  stopDuel(pairsArray, a) {
    console.log(`${a.name} has won!
    #####################################################`);
  }
  error() {
    console.log('N');
  }
}
