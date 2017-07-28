console.log("Is this at least working?");

import { fellowship, total } from './fellowship';
//the ./  means current directory

console.log(fellowship, total);

import { add, multiply } from './math';

console.log(add(5, 10);
//this should log 15

console.log(multiply(5, 10);
//this should log 50


//with the default of the export in math.js set to "multiply"
//we can now do this:

import multiply from './math';
//note no curly braces
console.log(multiply(5, 10));
