const Randomizer = require('../randomizer.js');

describe("Randomizer Class", () => {
    // Test checks that a die object of a given positive integer is created.
    test("should create an object of size 20", () => {
        let d20 = new Randomizer(20);
        expect(d20.dieSize).toEqual(20);
    });
    
    // Test checks that a die object is always a positive integer.
    test("should reverse a negative integer into a positive one", () => {
        let dMinus4 = new Randomizer(-4);
        expect(dMinus4.dieSize).toEqual(4);
    });
    test("should create an object of size 1 when a decimal is passed", () => {
        let dPi = new Randomizer(Math.PI);
        expect(dPi.dieSize).toEqual(1);
    });
    test("should create an object of size 1 when a non-number is passed", () => {
        let dAlpha = new Randomizer("alpha");
        expect(dAlpha.dieSize).toEqual(1);
    });

    // Test checks that a die method can 'roll', giving an integer between 1 and the given size.
    test("should return an integer between 1 and 8", () => {
        let d8 = new Randomizer(8);
        let rolls = [];
        for (let i = 0; i < 100; i++) {
            rolls.push(d8.dieRoll())
        }
        const maxRoll = Math.max(...rolls);
        const minRoll = Math.min(...rolls);
        expect(maxRoll).toBeLessThanOrEqual(8);
        expect(minRoll).toBeGreaterThanOrEqual(1);
    });

});