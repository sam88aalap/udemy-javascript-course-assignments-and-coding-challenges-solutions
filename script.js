'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },

  //es6 method to declare function
  orderDelivery({starterIndex,mainIndex,time}){
    console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} delivered at${time}`);
    
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
 
restaurant.orderDelivery({
  time:'5pm',
  starterIndex:2,
  mainIndex:2
})

//optional chaining
console.log(restaurant.openingHours.mon?.open);// returns undefined instead of error

const days=['mon','tue','wed','thu','fri','sat'];

//optional chaining and nullish operator
for (const i of days){
  const open= restaurant.openingHours[i]?.open??'closed';
  console.log(`${i}: open at ${open}`);
}

//optional chaining on functions
console.log(restaurant.order?.poda??'method not found');
 console.log(restaurant['openingHours']['fri']); 


 // looping over objects using keys

 for (const i of Object.keys(restaurant.openingHours)){
   console.log(i);
 }

  
 // looping over objects using values

 for (const i of Object.values(restaurant.openingHours)){
  console.log(i);
}

 // looping over objects using entries

 for (const [key,{open,close}] of Object.entries(restaurant.openingHours)){
  console.log('key:',key,'open:' ,open,'close', close);
}


// //object destructuring
// const {name,openingHours,categories} = restaurant;
// // console.log(name,openingHours,categories);
 
// // using new variable names
// const {name:x,openingHours:y,categories:z} = restaurant;
// console.log(x,y,z);

// //adding default value
// const {menu=[],starterMenu:starter=[],mainMenu:main=[]} = restaurant;
// console.log(menu,starter,main);

// //mutating variables for objects
// console.log('__________________________________________________');
// let a=12;
// let b=15;
// console.log(a,b);
// const obj={a:7,b:22,c:1};
// ({a,b}=obj);
// console.log(a,b);

// //nested objects
// const {fri:{open,close}}=openingHours;
// console.log(open,close);


// // destructuring array
// const array1 =[1,2,3,4];
// const [a,b,c,d]= array1;
// console.log(a,b,c,d);

// // let [first,second]=restaurant.categories;
// // console.log(first,second);
// // to skip an element
// let [first,,second]=restaurant.categories;
// console.log(first,second);

// // swaping using array destructuring
// [first,second]=[second,first]
// console.log(first,second);

// const [starter,maincourse]=restaurant.order(2,0);
// console.log(starter,maincourse);

// // destruct in nested array
// const nestedArray = [2,4,[5,6]];
// // let [i,,j] =nestedArray;
// // console.log(i,j); 

// // destruct inner array
// let [i,,[j,k]] =nestedArray;
// console.log(i,j,k);

// CODING CHALLENGE#1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,

  
  },
  printGoals:function(...players){
    console.log(`the players were ${players} and they scored ${players.length} goals`);
}
  };

//   const [player1,player2]=game.players;
//   console.log(player1,player2);

//   const [gk,...fieldplayers]=player1;
//   console.log(gk,fieldplayers);

//   const allPlayers = [...player1,...player2];
//   console.log(allPlayers);

//   const players1Final = [...player1,'Thiago', 'Coutinho', 'Perisic'];
//   console.log(players1Final);

//   const {team1,x:draw,team2} = game.odds;
//   console.log(team1,draw,team2);

//   game.printGoals(game.scored);
//   // game.printGoals(['a','b','c','d']);

//   team1>team2 || console.log('team 1 will win');

//   // for of loop
//   const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
//   for (const i of menu) console.log(i);

//   // to get index along with item
//   for (const i of menu.entries()) console.log(i);

//   // //only index
//   // for (const i in menu) console.log(i);

//   //destructuring
//   for (const [i,j] of menu.entries()) console.log(`item ${i+1}: ${j}`);

// CODING CHALLENGE #2
// for (const [j,i] of game.scored.entries()){
//   console.log(`Goal ${j+1}: ${i}`);
// }
// let avg=0;
// const odds=Object.values(game.odds);
// for (const i of odds) {
//   console.log(avg+=i);
//   // avg+=i;

// }
// console.log(avg);
// avg=avg/odds.length;
// console.log(avg);

// for (const [i,j] of Object.entries(game.odds)) {
//   const str = i==='x'?'draw':`victory ${game[i]}` ;
//   console.log(`Odd of ${str} is ${j}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// //operations on map
// const map1 = new Map([[1,'t'],[2,'f'],[3,'t']]);
// console.log(map1);
// const arrMap =[...map1];
// console.log(arrMap);
// console.log([...map1.keys()]);
// console.log([...map1.values()]);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

// CODING CHALLENGE #3

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes.` );

//4
for(const [i,j] of gameEvents){
  i<=45 ? console.log(`[FIRST HALF] ${i}: ${j}`): console.log(`[SECOND HALF] ${i}: ${j}`);
} 