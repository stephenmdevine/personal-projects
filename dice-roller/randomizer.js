class Randomizer {
    constructor(dieSize) {
        if (!Number.isInteger(dieSize)) {
            dieSize = 1;
        }   else {
            dieSize = Math.abs(dieSize);
        }
        this.dieSize = dieSize;
    }
    dieRoll() {
        let roll = Math.ceil(Math.random() * this.dieSize);
        return roll;
    }
}

module.exports = Randomizer;