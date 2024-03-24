import playGame from '../index.js';

// Получение корректных ответов для проверки ответов игрока
function getCorrectRespone(valueOne, valueTwo, operation) {
  let result = 0;
  switch (operation) {
    case '*':
      result = valueOne * valueTwo;
      break;
    case '-':
      result = valueOne - valueTwo;
      break;
    case '+':
      result = valueOne + valueTwo;
      break;
    default:
      console.log('Sorry, operation notfound');
  }
  return result;
}

function getRandomOperation(index) {
  const arrayOperation = ['*', '+', '-'];
  return arrayOperation[index];
}

// Получение рандомных  значений вопросов для игры
function getRandomValue(iterations, rangeValue) {
  const resultQuestion = [];
  const resultCorrectResponse = [];

  for (let i = 0; i < iterations; i += 1) {
    const valueOne = Math.floor(Math.random() * rangeValue);
    const valueTwo = Math.floor(Math.random() * rangeValue);
    const operation = getRandomOperation(Math.floor(Math.random() * 3));

    resultQuestion.push(`${valueOne} ${operation} ${valueTwo}`);
    resultCorrectResponse.push(getCorrectRespone(valueOne, valueTwo, operation));
  }

  return [resultQuestion, resultCorrectResponse];
}

// Запуск игры BrainCalc
function playBrainCalc() {
  const questionForCalc = 'What is the result of the expression?';
  const qtyRepeatCalcGame = 3;
  const maxValueCalcGame = 900;

  const allRandomValues = getRandomValue(qtyRepeatCalcGame, maxValueCalcGame);

  const randomValues = allRandomValues[0];
  const correctRespones = allRandomValues[1];

  playGame(questionForCalc, randomValues, correctRespones);
}

export default playBrainCalc;
