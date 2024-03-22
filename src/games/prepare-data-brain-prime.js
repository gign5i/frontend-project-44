export default () => {
  const randomNumber = Math.floor(Math.random() * (50 - 1) + 1);

  let count = 0;

  for (let i = randomNumber; i > 0; i -= 1) {
    if (randomNumber % i === 0) {
      count += 1;
    }
  }

  const rightAnswer = count === 2 ? 'yes' : 'no';

  return [randomNumber, rightAnswer];
};

/*
список простых чисел (до 200):
2 3 (5) (7) (11) (13) 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 (97)
(101) 103 107 109 113 (127) 131 137 139 (149) 151 157 163 167 173 179 181 191
193 (197) (199)
*/
