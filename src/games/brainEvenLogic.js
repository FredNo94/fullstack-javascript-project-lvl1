import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const maxValueCalcGame = 1000;

  const num1 = getRandomInRange(maxValueCalcGame);
  const answer = isEven(num1) ? 'yes' : 'no';
  const question = String(num1);

  return [question, answer];
};

export default () => {
  runEngine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
};
