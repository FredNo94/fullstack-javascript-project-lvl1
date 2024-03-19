import readlineSync from 'readline-sync';

function playBrainEven() {
  let answerUser = 0;
  let randomValue;
  const rangeValue = 1000;
  let correctAnswer = '';

  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    randomValue = Math.floor(Math.random() * rangeValue);
    console.log(`Question:  ${randomValue}`);
    correctAnswer = (randomValue % 2 === 0) ? 'yes' : 'no';
    answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== correctAnswer) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    } if (answerUser === correctAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
}

export default playBrainEven;
