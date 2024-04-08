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

const generateRound = () => {
  const rangeValue = 300;
  const randValue = getRandomInRange(rangeValue);

  const answer = getStatusValue(randValue);
  const question = randValue;

  return [question, answer];
};

export default () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
};
