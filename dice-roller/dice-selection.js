const input = require('readline-sync');
const menu = require('./menu');
const diceSet = require('./dice-set');

let numOfDice = 0;
let multiples = "";
let dieSelect = 0;
let keySelect = Object.keys(diceSet);
let diceRolls = [];
while (!(numOfDice > 0)) {
    numOfDice = input.question("How many dice are you rolling? ");
}
if (numOfDice = 1) {
    console.log(menu(diceSet));
    while (!(dieSelect >= 1 && dieSelect <= 9)) {
        dieSelect = input.question("Which die are you rolling? ");
    }
    let keyItem = keySelect[(dieSelect - 1)];
    diceRolls.push(diceSet[`${keyItem}`]);
}

/*
if (numOfDice > 1) {
    multiples = input.question("Are the dice all the same? ");
}   else {
    console.log(menu(diceSet));
    while (!(dieSelect >= 1 && dieSelect <= 9)) {
        dieSelect = input.question("Which die are you rolling? ");
    }
}

if (multiples.toLowerCase().slice(0,1) === "y") {
    console.log(menu(diceSet));

}
*/