#!/usr/bin/env node
import prepareDataBrainEven from '../src/games/prepare-data-brain-even.js';
import { startEngine } from '../src/index.js';

export const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  startEngine(rules, prepareDataBrainEven);
};
evenGame();
