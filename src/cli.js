import readlineSync from 'readline-sync';

function startGame() {
    const nameUser = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + nameUser);
};

export {startGame};