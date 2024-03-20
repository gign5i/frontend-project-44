#!/usr/bin/env node
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

export const setName = () => {
  const userName = askName();
  return userName;
};

console.log(`Hello, ${setName()}!`);
