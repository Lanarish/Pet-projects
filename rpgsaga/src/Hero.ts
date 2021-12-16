export class Hero {
  name: string;
  power: number;
  health: number;
  startHealth: number;
  lastName: string;

  constructor(name, lastName, power, health) {
    this.name = name;
    this.lastName = lastName;
    this.power = power;
    this.health = health;
  }
  //   performSuperPower() {
  //     console.log('n');
  //   }
  //   prepareForRound() {
  //     console.log('n');
  //   }
}
