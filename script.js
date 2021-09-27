// let js = 'amazing';
// console.log(40 + 9 + 98);
// let firstName = 'Sam';


// 1. Values and Variables
let country = 'India';
let continent = 'Asia';
let population = 1300000000;
console.log(country);
console.log(continent);
console.log(population);

// 2. Data Types
let isIsland = false;
// let language;
console.log(isIsland);
// console.log(language);
// console.log(typeof country);

// 3. let, const and var
const language = 'Malayalam';
console.log(language);

//4. : Basic Operators
console.log(population / 2);
population += 1;
console.log(population);
if (population > 60000000) console.log('yes');
else console.log('no');
if (population > 33000000) console.log('yes');
else console.log('no');
const description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;
console.log(description);

// CODING CHALLENGE #1
const heightMark = 1.69;
const heightJohn = 1.95;
const weightMark = 78;
const weightJohn = 92;

let bmiMark = weightMark / (heightMark ** 2);
let bmiJohn = weightJohn / (heightJohn ** 2);

console.log('Mark:', bmiMark, 'John:', bmiJohn);

const markHigherBmi = bmiMark > bmiJohn;
console.log(markHigherBmi);

//5.  Strings and Template Literals
console.log(`${country} is in ${continent} and its ${population} people speak ${language}. 😊`);

// CODING CHALLENGE #2
if (bmiJohn > bmiMark) {
    console.log(`John has greater BMI of ${bmiJohn}`);
}
else {
    console.log(`Mark has greater BMI of ${bmiMark}`);
}

//CODING CHALLENGE #3
const dolphinsScore1 = 109;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 108;
const koalasScore3 = 110;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) console.log("Dolphins Win!!!");
else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) console.log('Koalas Win!!!');
else if (koalasAverage === dolphinsAverage && koalasAverage >= 100 && dolphinsAverage >= 100) console.log('Its a Draw!!!');
else console.log('Nobody wins!!!');

//CODING CHALLENGE #4
const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
console.log(`Bill:${bill}
Tip:${tip}
Total:${bill + tip}`);