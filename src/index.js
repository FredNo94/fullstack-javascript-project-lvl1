import readlineSync from 'readline-sync';
import startGame from './cli.js';

function runEngine(questionForStartGame, generateRound) {
  const nameUser = startGame();

  console.log(questionForStartGame);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answer) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${nameUser}!`);
}

export default runEngine;
