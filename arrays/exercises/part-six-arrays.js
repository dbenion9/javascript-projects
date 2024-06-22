//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let hydrogen = ['Hydrogen', 'H', 1.080];
let helium = ['Helium', 'He', 4.0026];
let lithium = ['Lithium', 'Li', 6.94];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];
table.push(hydrogen);
table.push(helium);
table.push(lithium);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[0]);

console.log(table[0][0]);
console.log(table[0][1]);
console.log(table[0][2]);




//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log('The mass of Hydrogen is table[0].');
console.log('The name of the second element is [1][0].');
console.log('The symbol is Lithium is [1].');


//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let threeDimArray = [
[
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c2']
  ],
  [
    ['d1', 'd2', 'd3'],
    ['e1', 'e2', 'e3'],
    ['f1', 'f2', 'f3']
  ],
  [
    ['g1', 'g2', 'g3'],
    ['h1', 'h2', 'h3'],
    ['i1', 'i2', 'i2']
  ]   
];

console.log(threeDimArray[1]);
console.log(threeDimArray[1][2]);
console.log(threeDimArray[1][2][1]);
