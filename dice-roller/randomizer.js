class Randomizer {
    constructor(dieSize, modifier = 0) {
        if (!Number.isInteger(dieSize)) {
            dieSize = 1;
        }   else {
            dieSize = Math.abs(dieSize);
        }
        this.dieSize = dieSize;
        if (!Number.isInteger(modifier)) {
            modifier = 0;
        }
        this.modifier = modifier;
    }
    dieRoll() {
        let roll = Math.ceil(Math.random() * this.dieSize);
        return roll;
    }
}

module.exports = Randomizer;