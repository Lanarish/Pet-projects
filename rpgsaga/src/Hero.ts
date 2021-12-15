export class Hero {
  name: string;
  lastName: string;
  power: number;
  health: number;
  type: string;
  startHealth: number;

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
