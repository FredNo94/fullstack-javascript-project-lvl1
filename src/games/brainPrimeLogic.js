import playGame from '../index.js';

function playBrainPrime() {
  const questionForStartGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const qtyRepeat = 3;
  const rangeValue = 1000;
  const allRandomValues = getRandomValue(qtyRepeat, rangeValue);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForStartGame, randomValues, correctRespones);
}

// Получение рандомных  значений вопросов и ответов для игры
function getRandomValue(iterations, rangeValue) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const randValue = Math.floor(Math.random() * rangeValue);

    resultQuestion.push(randValue);
    resultCorrectResponse.push(getStatusValue(randValue));
  }

  return [resultQuestion, resultCorrectResponse];
}

// Проверка и получение статуса числа, простое или нет
function getStatusValue(randValue) {
  let type = 'yes';
  for (let i = 2; i < randValue; i += 1) {
    if (randValue % i === 0) {
      type = 'no';
    }
  }
  return type;
}

export default playBrainPrime;
