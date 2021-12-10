export class Hero {
  name: string;
  power: number;
  health: number;
  startHealth: number;

  constructor(options) {
    this.name = options.name;
    this.power = options.power;
    this.health = options.health;
  }
  //   performSuperPower() {
  //     console.log('n');
  //   }
  //   prepareForRound() {
  //     console.log('n');
  //   }
}
