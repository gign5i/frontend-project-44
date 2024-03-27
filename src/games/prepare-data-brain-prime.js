import getRandomNumber from '../helper.js';
import startEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDetails = (number) => {
  let countOfDivs = 0;
  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      countOfDivs += 1;
    }
  }
  return countOfDivs === 2;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 50);

  const rightAnswer = getDetails(question) ? 'yes' : 'no';
  console.log(rightAnswer);
  return [question, rightAnswer];
};

export default () => { startEngine(description, getQuestionAndAnswer); };

