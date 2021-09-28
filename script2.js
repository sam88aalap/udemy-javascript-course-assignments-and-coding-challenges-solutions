'use strict';

// 1. FUNCTIONS
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const india = describeCountry('India', 103, 'New Delhi');
const finland = describeCountry('Finland', 6, 'Helsinki');
console.log(`${india}
${finland}`);

// 2. FUNCTION DECLARATION VS EXPRESSIONS
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(103000000));
console.log(percentageOfWorld2(103000000));

// 3. ARROW FUNCTION
let percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(1141000000));

//CODING CHALLENGE #1

let calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(a, b) {
    if (a >= 2 * b) return `Dolphins win Score:${a}`;
    else if (b >= 2 * a) return `Koalas win Score:${b}`;
    else return `Nobody wins 
    Dolphins ${a}
    Koalas ${b}`;
}
console.log(checkWinner(avgDolphins, avgKoalas));
// console.log(checkWinner(576, 111));

// 4. ARRAYS

const populations = [1300, 1400, 6, 5];
if (populations.length === 4) console.log('the array has 4 elements');
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// CODING CHALLENGE #2
// console.log('------CHALLENGE #2-----')
// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) return bill * .15;
//     else return bill * .2;
// }

console.log(calcTip(100));
const bills = new Array(125, 555, 44);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

// 5. Introduction to Objects

// const myCountry = {
//     country: 'India',
//     capital: 'New Delhi',
//     Language: 'Hindi',
//     population: 1300,
//     neighbours: ['Pakistan', 'Nepal', "Bhutan", 'SriLanka', 'Bangladesh']

// }
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.Language} speaking people ${myCountry['neighbours'].length} neighbouring countries and a capital called ${myCountry.capital}`);
// myCountry.population += 2;
// console.log(myCountry.population);

// 6. Object Methods

const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    Language: 'Hindi',
    population: 1300,
    neighbours: ['Pakistan', 'Nepal', "Bhutan", 'SriLanka', 'Bangladesh'],
    checkIsland: function () {
        return (this.neighbours.length > 0) ? true : false;
    },
    describe: function () {
        return `${this.country} has ${this.population} million ${this.Language} speaking people ${this['neighbours'].length} neighbouring countries and a capital called ${this.capital}`;
    }

}
console.log(myCountry.describe())
// console.log(myCountry['checkIsland']());

// CODING CHALLENGE #3

const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) console.log(`Mark's BMI(${mark.bmi}) is higher than John's(${john.bmi})`);
else console.log(`John's BMI(${john.bmi}) is higher than Mark's (${mark.bmi})`);

// CODING CHALLENGE #4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) return bill * .15;
    else return bill * .2;
}

for (let i = 0; i < bills2.length; i++) {
    // const tip = calcTip(bills2[i]);
    tips2.push(calcTip(bills2[i]));
    totals.push(bills2[i] + tips2[i]);
}
console.log(`bills:${bills2}
tips:${tips2}
totals:${totals}`);

function calcAverage2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
}
console.log(calcAverage2(bills2));
console.log(calcAverage2(tips2));
console.log(calcAverage2(totals));
console.log(calcAverage2([2, 3, 7]));