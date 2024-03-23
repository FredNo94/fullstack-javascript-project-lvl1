import playGame from '../index.js';

// Запуск игры brain-gcd
function playBrainGcd() {
  const questionForStartGame = 'Find the greatest common divisor of given numbers.';
  const qtyRepeat = 3;
  const maxValueForGame = 10;

  const allRandomValues = getRandomValue(qtyRepeat, maxValueForGame);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForStartGame, randomValues, correctRespones);
}

// Получение рандомных  значений вопросов и ответов для игры
function getRandomValue(iterations, rangeValue) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const valueOne = Math.floor(Math.random() * rangeValue);
    const valueTwo = Math.floor(Math.random() * rangeValue);

    resultQuestion.push(`${valueOne} ${valueTwo}`);
    resultCorrectResponse.push(getCorrectRespones(valueOne, valueTwo));
  }

  return [resultQuestion, resultCorrectResponse];
}

// Получение корректных ответов для проверки ответов игрока
function getCorrectRespones(valueOne, valueTwo) {
  let minValue = 0;
  let maxValue = 0;
  let maxDivisior = 0;
  // Получение максимального и минимального числа
  if (valueOne <= valueTwo) {
    minValue = valueOne;
    maxValue = valueTwo;
  } else {
    minValue = valueTwo;
    maxValue = valueOne;
  }
  // Индекс для
  maxDivisior = minValue;

  // Проверка для слуучая когда минимальное равно  0
  if (maxDivisior === 0) {
    return 1;
  }
  // Цикл для нахождения максимального делителя
  for (let i = 0; i < minValue; i += 1) {
    if (maxValue % maxDivisior === 0 && minValue % maxDivisior === 0) {
      return maxDivisior;
    }
    maxDivisior -= 1;
  }

  return maxDivisior;
}

export default playBrainGcd;
