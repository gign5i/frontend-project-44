import readlindeSync from 'readline-sync';
import getName from './cli.js';

export default (rules, gameData) => {
  console.log('Welcome to the Brain Games!\n');

  const name = getName();

  console.log(`Hello, ${name}!\n\n${rules}\n`);

  let rounds = 0;
  while (rounds < 4) {
    if (rounds === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const [question, rightAnswer] = [...gameData()];
    console.log(`${question} - ?`);
    const userAnswer = readlindeSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      rounds += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
};
