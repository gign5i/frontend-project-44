import startEngine from '../index.js';
import getRandomNumber from '../helper.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getCorrectAnswer = (a, opIndex, b) => {
  let result = '';
  if (operations[opIndex] === '-') {
    result += a - b;
  } else if (operations[opIndex] === '+') {
    result += a + b;
  } else if (operations[opIndex] === '*') {
    result += a * b;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  let correctAnswer = '';
  const opIndex = getRandomNumber(0, 3);
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const question = `${a} ${operations[opIndex]} ${b}`;
  correctAnswer += getCorrectAnswer(a, opIndex, b);
  return [question, correctAnswer];
};

export default () => { startEngine(description, getQuestionAndAnswer); };
