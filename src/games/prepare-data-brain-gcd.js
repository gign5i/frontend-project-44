export default () => {
  let a = Math.floor(Math.random() * (10 - 1) + 1); // исключаем 0, поэтому от 1 - 10
  let b = Math.floor(Math.random() * (10 - 1) + 1); // исключаем 0, поэтому от 1 - 10
  let rightAnswer = '';
  const question = `(${a} , ${b})`;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  rightAnswer += a;

  return [question, rightAnswer];
};
