import { readFileSync } from 'fs';

var text = readFileSync('./index.txt');
console.log(text);