import getRandomNumber from '../helper.js';
import startEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCorretAnswer = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return firstNumber;
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
