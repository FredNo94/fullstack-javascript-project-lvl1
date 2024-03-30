import readlineSync from 'readline-sync';
import startGame from './cli.js';

function playGame(questionForStartGame, randomValue, correctAnswer) {
  let answerUser;

  const nameUser = startGame();

  console.log(questionForStartGame);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${randomValue[i]}`);
    answerUser = readlineSync.question('Your answer: ');
    if (`${answerUser}` !== `${correctAnswer[i]}`) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${nameUser}!`);
}

export default playGame;
