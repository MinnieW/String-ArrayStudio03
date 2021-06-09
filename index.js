let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
//console.log(foodArray);
let equimentArray = equipment.split(",").sort();
//console.log(equimentArray);
let petsArray = pets.split(",").sort();
//console.log(petsArray);
let sleepAidsArray = sleepAids.split(",").sort()
//console.log(sleepAidsArray);

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equimentArray, petsArray, sleepAidsArray];
console.log(cargoHold);


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readlind-sync');
let outerArray = input.question("Enter an number for the outer array: ");
let innerArray = input.question("Enter a number for the inner array: ");
console.log(cargoHold[Number(outerArray)][Number(innerArray)]);


//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.



//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
