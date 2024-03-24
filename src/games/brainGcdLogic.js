import playGame from '../index.js';

// Получение корректных ответов для проверки ответов игрока
function getCorrectRespones(valueOne, valueTwo) {
  let minValue;
  let maxValue;
  let maxDivisior;
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
    return maxValue;
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

// Запуск игры brain-gcd
function playBrainGcd() {
  const questionForGcdGame= 'Find the greatest common divisor of given numbers.';
  const qtyRepeatForGcdGame = 3;
  const maxValueForGcdGame = 200;

  const allRandomValues = getRandomValue(qtyRepeatForGcdGame, maxValueForGcdGame);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForGcdGame, randomValues, correctRespones);
}

export default playBrainGcd;
