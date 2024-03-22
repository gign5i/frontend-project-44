#!/usr/bin/env node
import prepareDataBrainGcd from '../src/games/prepare-data-brain-gcd.js';
import { startEngine } from '../src/index.js';

export const gcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  startEngine(rule, prepareDataBrainGcd);
};
gcdGame();
