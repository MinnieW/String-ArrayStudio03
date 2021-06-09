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
const input = require('readline-sync');
/*let outerArray = input.question("Enter a number for the outer array (0-3): ");
let innerArray = input.question("Enter a number for the inner array (0-3): ");
console.log(cargoHold[Number(outerArray)][Number(innerArray)]);*/
let cabinetChoice = input.question("Enter a number to select a cabinet (0-3): ");
let itemSearch = input.question("What item are you looking for? ")
cabinetChoice = Number(cabinetChoice);
//console.log(cargoHold[Number(cabinetChoice)]);

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetChoice < 3) {
// `The cabinet contains ${cargoHold[cabinetChoice].join(", ")}`
    if (cargoHold[cabinetChoice].includes(itemSearch)) {
      `Cabinet ${cargoHold[cabinetChoice].join(", ")} DOES contain ${itemSearch}.`
    } else {
      `Cabinet ${cargoHold[cabinetChoice].join(", ")} DOES NOT contain ${itemSearch}.`
    }
} else {
  `Error: Invalid entry`
}



//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
