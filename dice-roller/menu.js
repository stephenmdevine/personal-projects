const input = require('readline-sync');
const selection = require('./dice-selection');
const summedDice = require('./summed-dice');
const separateDice = require('./separate-dice');


// function menu(obj) {
//     let menuArr = Object.keys(obj);
//     // return menuArr;
//     let menuList = "";
//     for (let i = 0; i < menuArr.length; i++) {
//         menuList += `\n${i+1}. ${menuArr[i]}`;
//     }
//     return menuList;
// }

function menu() {
    let rolledDice = selection();
    let ask = input.question("Sum all the dice together? (1 = yes, 0 = no) ");
    if (ask === "1") {
        console.log("Summing the dice...");
        console.log(summedDice(rolledDice));
    }   else {
        console.log("Rolling the dice...");
        console.log(separateDice(rolledDice));
    }
}

module.exports = menu;