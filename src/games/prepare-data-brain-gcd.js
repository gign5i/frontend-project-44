import getRandomNumber from '../helper.js';
import startEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCorretAnswer = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const getQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);
  let correctAnswer = '';
  const question = `${a} ${b}`;
  correctAnswer += getCorretAnswer(a, b);
  return [question, correctAnswer];
};

export default () => { startEngine(description, getQuestionAndAnswer); };
