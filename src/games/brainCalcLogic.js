import playGame from '../index.js';
import getRandomInRange from '../utils.js';

function getCorrectRespone(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
}

function getRandomOperation(index) {
  const arrayOperation = ['*', '+', '-'];
  return arrayOperation[index];
}

const generateRound = () => {
  const maxValueCalcGame = 900;

  const num1 = getRandomInRange(maxValueCalcGame);
  const num2 = getRandomInRange(maxValueCalcGame);
  const operator = getRandomOperation(getRandomInRange(3));

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getCorrectRespone(num1, num2, operator));

  return [question, answer];
};

export default () => {
  playGame('What is the result of the expression?', generateRound);
};
