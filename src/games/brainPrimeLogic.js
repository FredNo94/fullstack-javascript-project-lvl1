import playGame from '../index.js';
import getRandomInRange from '../utils.js';

function getStatusValue(randValue) {
  let type = 'yes';
  for (let i = 2; i < randValue; i += 1) {
    if (randValue % i === 0) {
      type = 'no';
    }
  }
  return type;
}

function getRandomValue(iterations, rangeValue) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const randValue = getRandomInRange(rangeValue);

    resultQuestion.push(randValue);
    resultCorrectResponse.push(getStatusValue(randValue));
  }

  return [resultQuestion, resultCorrectResponse];
}

function playBrainPrime() {
  const questionForPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const qtyRepeatForPrimeGame = 3;
  const rangeValueForPrimeGame = 800;
  const allRandomValues = getRandomValue(qtyRepeatForPrimeGame, rangeValueForPrimeGame);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForPrimeGame, randomValues, correctRespones);
}

export default playBrainPrime;
