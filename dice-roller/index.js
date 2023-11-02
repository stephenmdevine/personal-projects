const diceSet = require('./dice-set.js');
const menu = require('./menu.js');
const input = require('readline-sync');
const selection = require('./dice-selection.js');

function runProgram () {
    let playOn = true;
    let ans = "";
    const falsiness = ['n', 'no', '0' , 'false'];
    while (playOn) {
        menu();
        ans = input.question("Would you like to roll more dice? ");
        if (falsiness.includes(ans.toLowerCase())) {
            playOn = false;
        }
    }
}

runProgram();