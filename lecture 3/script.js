// const math = require('./math.js');

// import { add, subtract } from './math.js';

// console.log(math.add(2, 3)); 
// console.log(math.subtract(5, 2));

// console.log("Hello, World!");



const path = require('path');
const file = "lecture 3/script.js";
console.log(file);
console.log(path.basename(file));
console.log(path.dirname(file));
console.log(path.extname(file));



const fs = require('fs');
const data = fs.readFileSync('sample.txt', 'utf8');
console.log(data);

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});