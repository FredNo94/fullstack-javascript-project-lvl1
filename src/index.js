import readlineSync from 'readline-sync';

// Общая функция прохождения игры
function playGame(questionForStartGame, randomValue, correctAnswer) {
  let answerUser;
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);

  console.log(questionForStartGame);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question:  ${randomValue[i]}`);
    answerUser = readlineSync.question('Your answer: ');
    if (`${answerUser}` !== `${correctAnswer[i]}`) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    } if (`${answerUser}` === `${correctAnswer[i]}`) {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
}

export default playGame;
