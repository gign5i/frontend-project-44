export default () => {
  const operations = ['+', '-', '*'];

  const opindex = Math.floor(Math.random() * 3);
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  const question = `${a} ${operations[opindex]} ${b}`;

  let result = '';

  if (operations[opindex] === '-') {
    result += a - b;
  } else if (operations[opindex] === '+') {
    result += a + b;
  } else if (operations[opindex] === '*') {
    result += a * b;
  }

  return [question, result];
};
