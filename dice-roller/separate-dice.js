function separateDice(diceArr) {
    let listOfDice = [];
    for (let i = 0; i < diceArr.length; i++) {
        let quickRoll = diceArr[i].dieRoll() + diceArr[i].modifier;
        let tempVar = `d${diceArr[i].dieSize}+${diceArr[i].modifier} = ${quickRoll}`;
        listOfDice.push(tempVar);
    }
    listOfDice.unshift(0);
    return listOfDice;
}

module.exports = separateDice;