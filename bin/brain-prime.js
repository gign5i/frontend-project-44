#!/usr/bin/env node
import prepareDataBrainPrime from '../src/games/prepare-data-brain-prime.js';
import startEngine from '../src/index.js';

const primeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startEngine(rule, prepareDataBrainPrime);
};
primeGame();
