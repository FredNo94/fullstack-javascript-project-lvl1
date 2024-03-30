import playGame from '../index.js';
import getRandomInRange from '../utils.js';

function getMinAndMaxValue(valueOne, valueTwo) {
  let minValue;
  let maxValue;

  if (valueOne <= valueTwo) {
    minValue = valueOne;
    maxValue = valueTwo;
  } else {
    minValue = valueTwo;
    maxValue = valueOne;
  }

  return [minValue, maxValue];
}

function getCorrectRespones(sortValue) {
  const minValue = sortValue[0];
  const maxValue = sortValue[1];
  let divisior = minValue;

  if (divisior === 0) {
    return maxValue;
  }

  for (let i = 0; i < minValue; i += 1) {
    if (maxValue % divisior === 0 && minValue % divisior === 0) {
      return divisior;
    }
    divisior -= 1;
  }

  return divisior;
}

function getRandomValue(iterations, rangeValue) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const valueOne = getRandomInRange(rangeValue);
    const valueTwo = getRandomInRange(rangeValue);

    const sortValue = getMinAndMaxValue(valueOne, valueTwo);

    resultQuestion.push(`${valueOne} ${valueTwo}`);

    resultCorrectResponse.push(getCorrectRespones(sortValue));
  }

  return [resultQuestion, resultCorrectResponse];
}

function playBrainGcd() {
  const questionForGcdGame = 'Find the greatest common divisor of given numbers.';
  const qtyRepeatForGcdGame = 3;
  const maxValueForGcdGame = 200;

  const allRandomValues = getRandomValue(qtyRepeatForGcdGame, maxValueForGcdGame);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForGcdGame, randomValues, correctRespones);
}

export default playBrainGcd;
