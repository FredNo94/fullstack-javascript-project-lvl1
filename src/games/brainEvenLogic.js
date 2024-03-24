import playGame from '../index.js';

// Получение рандомных  значений вопросов дляигры
function getRandomValue(iterations, rangeValue) {
  const result = [];

  for (let i = 0; i < iterations; i += 1) {
    result.push(Math.floor(Math.random() * rangeValue));
  }

  return result;
}

// Получение корректных ответов для проверки ответов игрока
function getCorrectRespones(randomValue) {
  const result = [];
  randomValue.forEach((element) => {
    result.push((element % 2 === 0) ? 'yes' : 'no');
  });

  return result;
}

// Запуск игры BrainEven
function playBrainEven() {
  const questionForStartGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const qtyRepeat = 3;
  const maxValue = 1000;

  const randomValues = getRandomValue(qtyRepeat, maxValue);
  const correctRespones = getCorrectRespones(randomValues);

  playGame(questionForStartGame, randomValues, correctRespones);
}

export default playBrainEven;
