import startEngine from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, size, adder) => {
  const array = [firstNumber];

  for (let i = 1; i < size; i += 1) {
    array[i] = array[i - 1] + adder;
  }
  return array;
};

const getQuestionAndAnswer = () => {
  const size = getRandomNumber(5, 10);

  const adder = getRandomNumber(2, 5);

  const firstNumber = getRandomNumber(1, 30);

  const progression = getProgression(firstNumber, size, adder);

  const hideElement = getRandomNumber(0, size);

  let correctAnswer = '';

  correctAnswer += `${progression[hideElement]}`;

  progression[hideElement] = '..';

  let question = '';

  for (let i = 0; i < size; i += 1) {
    question += `${progression[i]} `;
  }
  return [question, correctAnswer];
};

export default () => { startEngine(description, getQuestionAndAnswer); };
