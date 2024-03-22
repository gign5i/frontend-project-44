export default () => {
  const size = Math.floor(Math.random() * (6 - 5) + 5);

  const adder = Math.floor(Math.random() * (5 - 2) + 2);

  const firstNumber = Math.floor(Math.random() * (30 - 1) + 1);

  const array = [firstNumber];

  for (let i = 1; i < size; i += 1) {
    array[i] = array[i - 1] + adder;
  }

  const hideElement = Math.floor(Math.random() * size);

  let rightAnswer = '';

  rightAnswer += `${array[hideElement]}`;

  array[hideElement] = '..';

  let question = '';

  for (let i = 0; i < size; i += 1) {
    question += `${array[i]} `;
  }
  return [question, rightAnswer];
};
