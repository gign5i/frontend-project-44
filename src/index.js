import readlindeSync from 'readline-sync';

const countRounds = 3;

export default (gameRules, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name ?');
  const name = readlindeSync.question('Your answer: ');

  console.log(`Hello, ${name}!`);
  console.log(`${gameRules}`);

  for (let i = 0; i < countRounds; i += 1) {
    const [question, rightAnswer] = [...gameData()];
    console.log(`Question: ${question}`);
    const userAnswer = readlindeSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
