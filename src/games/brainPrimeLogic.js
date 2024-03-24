import playGame from '../index.js';

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

// Получение рандомных  значений вопросов и ответов для игры
function getRandomValue(rangeValue) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < 3; i += 1) {
    const randValue = Math.floor(Math.random() * rangeValue);

    resultQuestion.push(randValue);
    resultCorrectResponse.push(getStatusValue(randValue));
  }

  return [resultQuestion, resultCorrectResponse];
}

// Запуск игры brain-prime
function playBrainPrime() {
  const questionForPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rangeValueForPrimeGame  = 100;
  const allRandomValues = getRandomValue(rangeValueForPrimeGame);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForPrimeGame, randomValues, correctRespones);
}

export default playBrainPrime;
