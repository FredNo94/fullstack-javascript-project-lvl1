import playGame from '../index.js';

// Получение рандомных  значений вопросов дляигры
function getRandomValue(rangeValue) {
  const result = [];

  for (let i = 0; i < 3; i += 1) {
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
  const questionForEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const maxValueForEvenGame = 1000;

  const randomValues = getRandomValue(maxValueForEvenGame);
  const correctRespones = getCorrectRespones(randomValues);

  playGame(questionForEvenGame, randomValues, correctRespones);
}

export default playBrainEven;
