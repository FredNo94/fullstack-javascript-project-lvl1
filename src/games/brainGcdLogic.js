import playGame from '../index.js';

// Вычисление максимального  и нимального числа
function getMinAndMaxValue(valueOne, valueTwo) {
  let minValue;
  let maxValue;

  if (valueOne <= valueTwo) {
    minValue = valueOne;
    maxValue = valueTwo;
  } else {
    minValue = valueTwo;
    maxValue = valueOne;
  }

  return [minValue, maxValue];
}
// Получение корректных ответов для проверки ответов игрока
function getCorrectRespones(sortValue) {
  const minValue = sortValue[0];
  const maxValue = sortValue[1];
  let divisior = minValue;

  // Проверка для случая когда минимальное равно  0
  if (divisior === 0) {
    return maxValue;
  }

  // Цикл для нахождения максимального делителя
  for (let i = 0; i < minValue; i += 1) {
    if (maxValue % divisior === 0 && minValue % divisior === 0) {
      return divisior;
    }
    divisior -= 1;
  }

  return divisior;
}

// Получение рандомных  значений вопросов и ответов для игры
function getRandomValue(iterations, rangeValue) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const valueOne = Math.floor(Math.random() * rangeValue);
    const valueTwo = Math.floor(Math.random() * rangeValue);
    const sortValue = getMinAndMaxValue(valueOne, valueTwo);

    resultQuestion.push(`${valueOne} ${valueTwo}`);

    resultCorrectResponse.push(getCorrectRespones(sortValue));
  }

  return [resultQuestion, resultCorrectResponse];
}

// Запуск игры brain-gcd
function playBrainGcd() {
  const questionForGcdGame = 'Find the greatest common divisor of given numbers.';
  const qtyRepeatForGcdGame = 3;
  const maxValueForGcdGame = 200;

  const allRandomValues = getRandomValue(qtyRepeatForGcdGame, maxValueForGcdGame);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForGcdGame, randomValues, correctRespones);
}

export default playBrainGcd;
