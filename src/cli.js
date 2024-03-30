import readlineSync from 'readline-sync';

function startGame() {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  return nameUser;
}

export default startGame;
