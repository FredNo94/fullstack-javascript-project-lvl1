import playGame from '../index.js';
import getRandomInRange from '../utils.js';

function getProgression(sizeStepProgression, sizeProgression) {
  let correctAnswerForProg;
  let result = '';
  let valueProg = sizeStepProgression;
  const randIndexValueProg = getRandomInRange(0, sizeProgression);

  for (let i = 0; i <= sizeProgression; i += 1) {
    if (randIndexValueProg === i) {
      result += '.. ';
      correctAnswerForProg = valueProg;
      valueProg += sizeStepProgression;
    } else {
      result += `${valueProg} `;
      valueProg += sizeStepProgression;
    }
  }
  return [result, correctAnswerForProg];
}

function getRandomValue(iterations, minSizeProgression, maxSizeProgression) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const sizeStepProgression = Math.floor(Math.random() * 10) + 1;
    const sizeProgression = getRandomInRange(minSizeProgression, maxSizeProgression);

    const progressionWithAnswer = getProgression(
      sizeStepProgression,
      sizeProgression,
    );

    resultQuestion.push(progressionWithAnswer[0]);
    resultCorrectResponse.push(progressionWithAnswer[1]);
  }

  return [resultQuestion, resultCorrectResponse];
}

function playBrainProgression() {
  const questionForProgGame = 'What number is missing in the progression?';
  const qtyRepeatForProgGame = 3;
  const minSizeProgression = 5;
  const maxSizeProgression = 10;

  const allRandomValues = getRandomValue(
    qtyRepeatForProgGame,
    minSizeProgression,
    maxSizeProgression,
  );

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForProgGame, randomValues, correctRespones);
}

export default playBrainProgression;
