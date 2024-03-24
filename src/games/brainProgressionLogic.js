import playGame from '../index.js';

// Функция для получения слуйчайного значения в диапозоне чисел
function getRandValueBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция получения прогрессии и корректного ответа для  проверки
function getProgression(sizeStepProgression, sizeProgression) {
  let correctAnswerForProg;
  let result = '';
  let valueProg = sizeStepProgression;
  const randIndexValueProg = getRandValueBetween(0, sizeProgression);

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

// Получение рандомных  значений вопросов и ответов для игры
function getRandomValue(iterations, minSizeProgression, maxSizeProgression) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const sizeStepProgression = Math.floor(Math.random() * 10) + 1;
    const sizeProgression = getRandValueBetween(minSizeProgression, maxSizeProgression);

    const progressionWithAnswer = getProgression(
      sizeStepProgression,
      sizeProgression,
    );

    resultQuestion.push(progressionWithAnswer[0]);
    resultCorrectResponse.push(progressionWithAnswer[1]);
  }

  return [resultQuestion, resultCorrectResponse];
}

// Запуск игры brain-progression
function playBrainProgression() {
  const questionForStartGame = 'What number is missing in the progression?';
  const qtyRepeat = 3;
  const minSizeProgression = 5;
  const maxSizeProgression = 10;

  const allRandomValues = getRandomValue(qtyRepeat, minSizeProgression, maxSizeProgression);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForStartGame, randomValues, correctRespones);
}

export default playBrainProgression;
