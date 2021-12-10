// export class Duel {
//   startDuel(newHeroArray) {
//     console.log("I'm here");
//     const turn: number = this.whoIsFirst();
//     let a: number, b: number;
//     if (turn === 0) {
//       a = 0;
//       b = 1;
//     } else {
//       a = 1;
//       b = 0;
//     }

//     for (; newHeroArray[0].health > 0 && newHeroArray[0].health > 0; ) {
//       if (a === 1) {
//         this.fight(a, b, newHeroArray);
//         this.fight(b, a, newHeroArray);
//       } else {
//         this.fight(b, a, newHeroArray);
//         this.fight(a, b, newHeroArray);
//       }
//     }
//   }
//   whoIsFirst() {
//     const firstTurn: number = Math.floor(Math.random());
//     return firstTurn;
//   }
//   fight(a: number, b: number, newHeroArray) {
//     newHeroArray[b].health -= newHeroArray[a].power;
//     console.log(newHeroArray[b].health, newHeroArray[a].power);
//   }
// }
