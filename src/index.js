import readlindeSync from 'readline-sync';
import getName from './cli.js';

export const startEngine = (rules, func) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);

  console.log(`${rules}`);

  let rounds = 0;
  while (rounds < 4) {
    if (rounds === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const [question, rightAnswer] = [...func()];
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
