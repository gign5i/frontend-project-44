#!/usr/bin/env node
import prepareDataBrainProgression from '../src/games/prepare-data-brain-progression.js';
import startEngine from '../src/index.js';

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';
  startEngine(rule, prepareDataBrainProgression);
};
progressionGame();
