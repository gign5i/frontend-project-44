export default () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};
