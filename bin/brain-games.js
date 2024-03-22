#!/usr/bin/env node
import askName from '../src/cli.js';

const setName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello, ${userName}`);
  return userName;
};
setName();
