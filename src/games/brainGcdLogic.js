import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const generateRound = () => {
  const rangeValue = 20;
  const valueOne = getRandomInRange(rangeValue);
  const valueTwo = getRandomInRange(rangeValue);

  const answer = `${getGcd(valueOne, valueTwo)}`;
  const question = `${valueOne} ${valueTwo}`;

  return [question, answer];
};

export default () => {
  runEngine('Find the greatest common divisor of given numbers.', generateRound);
};
