import playGame from '../index.js';
import getRandomInRange from '../utils.js';

function getRandomValue(iterations, rangeValue) {
  const result = [];

  for (let i = 0; i < iterations; i += 1) {
    result.push(getRandomInRange(rangeValue));
  }

  return result;
}

function getCorrectRespones(randomValue) {
  const result = [];
  randomValue.forEach((element) => {
    result.push((element % 2 === 0) ? 'yes' : 'no');
  });

  return result;
}

function playBrainEven() {
  const questionForEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const qtyRepeatForEvenGame = 3;
  const maxValueForEvenGame = 1000;

  const randomValues = getRandomValue(qtyRepeatForEvenGame, maxValueForEvenGame);
  const correctRespones = getCorrectRespones(randomValues);

  playGame(questionForEvenGame, randomValues, correctRespones);
}

export default playBrainEven;
