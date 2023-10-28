const input = require('readline-sync');
const Randomizer = require('./randomizer');

function selection() {
    let numOfDice = 0;
    while (!(numOfDice > 0 && Number.isInteger(numOfDice))) {
        numOfDice = Number(input.question("How many dice are you rolling? "));
    }
    let dieSelect = 0;
    let modifier = 0;
    let diceRolls = [];
    for (let i = 0; i < numOfDice; i++) {
        while (!(dieSelect > 0 && Number.isInteger(dieSelect))) {
            dieSelect = Number(input.question(`\nDie #${i+1}. What size die are you rolling? d`));
        }
        modifier = Number(input.question(`Die #${i+1}. What is the die's modifier? `));
        // console.log(`Die #${i+1}. d${dieSelect}${modifier === 0 ? " ": `+${modifier}`}`);
        console.log("Die #" + (i+1) + ". d" + dieSelect + (modifier > 0 ? "+" + modifier : (modifier < 0 ? modifier : "")));
        diceRolls.push(new Randomizer(dieSelect, modifier));
        dieSelect = 0;
        modifier = 0;
    }
    return diceRolls;
}
