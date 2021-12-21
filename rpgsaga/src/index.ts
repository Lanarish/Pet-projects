import { Game } from './Game';

// function setupGame() {

//   const inquirer = require('inquirer');
//   const questions = [
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Number of players?',
//     },
//   ];
//   inquirer.prompt(questions).then(answers => {
//     console.log(`The number of players is ${answers['name']}!`);
//   });
// }

function main() {
  const game = new Game();
  // setupGame();
  game.run();
}
main();
