#!/usr/bin/env node
import AskUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const userResponse = await AskUserName();
console.log(`Hello, ${userResponse}!`);