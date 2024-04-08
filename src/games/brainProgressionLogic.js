import playGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const indexItem = getRandomInRange(5, length - 2);
  const changeItem = progression[indexItem];
  progression[indexItem] = '..';

  return [progression, `${changeItem}`];
};

const generateRound = () => {
  const maxValueProgression = 300;
  const maxLengthProg = 10;
  const maxStepProg = 50;

  const startProgression = getRandomInRange(0, maxValueProgression);
  const stepProgression = getRandomInRange(0, maxStepProg);
  const sizeProgression = getRandomInRange(5, maxLengthProg);

  return generateProgression(startProgression, stepProgression, sizeProgression);
};

export default () => {
  playGame('What number is missing in the progression?', generateRound);
};
