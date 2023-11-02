function summedDice(diceArr) {
    let listOfDice = [];
    let sum = 0;
    for (let i = 0; i < diceArr.length; i++) {
        let quickRoll = diceArr[i].dieRoll() + diceArr[i].modifier;
        sum += quickRoll;
        let tempVar = `d${diceArr[i].dieSize}+${diceArr[i].modifier} = ${quickRoll}`;
        listOfDice.push(tempVar);
    }
    listOfDice.unshift(sum);
    return listOfDice;
}

module.exports = summedDice;