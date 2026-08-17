// const math = require('./math.js');

// import { add, subtract } from './math.js';

// console.log(math.add(2, 3)); 
// console.log(math.subtract(5, 2));

// console.log("Hello, World!");



// const path = require('path');
// const file = "lecture 3/script.js";
// console.log(file);
// console.log(path.basename(file));
// console.log(path.dirname(file));
// console.log(path.extname(file));



// const fs = require('fs');
// const data = fs.readFileSync('sample.txt', 'utf8');
// console.log(data);

// fs.readFile('sample.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(data);
// });


// const { log } = require('console');
const fs = require('fs');
// fs.writeFileSync("./sample.txt", "HELLOOOOOOOOOOO")
// fs.writeFile("./sample.txt", "HELLOOOOOOOOOOO 2", (err)=>{
//     if (err){
//         console.log(err)
//     }
// })
// // fs.appendFileSync("./sample.txt", "\n23456789")
// fs.appendFile("./sample.txt", "\n000000000", (err)=>{
//     if (err) {
//         console.log(err)
//     }
// })

// fs.unlinkSync("./file.txt")

// fs.renameSync("./sample.txt", "./newSample.txt")

// fs.copyFileSync("./newSample.txt", "./copySample.txt")


// const crypto = require('crypto');

// const pass = "ASDFGHJKL123"

// const hash = crypto.createHash('sha256').update(pass).digest('hex');
// // console.log(hash);
// const salt=crypto.randomBytes(16).toString('hex');

// const hash2 = crypto.createHmac('sha256', salt).update(pass).digest('hex');
// console.log(hash2);


// const dns = require('dns');

// dns.lookup('www.google.com', (err, address, family) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(`Address: ${address}, Family: IPv${family}`);
//     }
// });

// dns.reverse("8.8.8.8", (err, hostnames) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(`Hostnames: ${hostnames}`);
//     }
// });

// const process = require('process');
// const data=process.argv;
// console.log(parseInt(data[2])+parseInt(data[3]));

