#!/usr/bin/env node
import prepareDataBrainCalc from '../src/games/prepare-data-brain-calc.js';
import { startEngine } from '../src/index.js';

export const calcGame = () => {
  const rule = 'What is the result of the expression?';
  startEngine(rule, prepareDataBrainCalc);
};
calcGame();
