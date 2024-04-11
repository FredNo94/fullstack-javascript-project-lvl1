import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

function getStatusValue(randValue) {
  for (let i = 2; i < randValue; i += 1) {
    if (randValue % i === 0) {
      return false;
    }
  }
  return true;
}

const generateRound = () => {
  const rangeValue = 300;
  const randValue = getRandomInRange(rangeValue);

  const answer = getStatusValue(randValue) ? 'yes' : 'no';
  const question = randValue;

  return [question, answer];
};

export default () => {
  runEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
};
