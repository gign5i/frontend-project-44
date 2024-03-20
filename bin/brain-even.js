#!/usr/bin/env node
import readlindeSync from 'readline-sync';
import askName from '../src/cli.js';

export const setName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = askName();
  return userName;
};

const name = setName();
console.log(`Hello, ${name}!`);


console.log('Answer "yes" if the number is even, otherwise answer "no".');

const func = () => {
  let rounds = 0;
  while (rounds < 3) {
    let number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    let rightUnswer = number % 2 === 0 ? 'yes' : 'no';
    let unswer = readlindeSync.question('Your answer: ');
    if (unswer === rightUnswer) {
      console.log('Correct!');
      rounds += 1;
    } else {
      console.log(`'${unswer}' is wrong answer ;(. Correct answer was '${rightUnswer}'.\nLet's try again, ${name} !`);
      return;
    }
  }
  if (rounds === 3) {
    console.log(`Congratulations, ${name} !`);
    return;
  }
};

func();



export { func };