const Randomizer = require("./randomizer.js");

let d2 = new Randomizer(2);
let d3 = new Randomizer(3);
let d4 = new Randomizer(4);
let d6 = new Randomizer(6);
let d8 = new Randomizer(8);
let d10 = new Randomizer(10);
let d12 = new Randomizer(12);
let d20 = new Randomizer(20);
let dPct = new Randomizer(100);

let diceSet = {
    d2: d2,
    d3: d3,
    d4: d4,
    d6: d6,
    d8: d8,
    d10: d10,
    d12: d12,
    d20: d20,
    dPct: dPct
}

module.exports = diceSet;