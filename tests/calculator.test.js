const Calculator = require('../modules/calculator');

const calculator = new Calculator;


describe('Calculator test', () => {
    describe('Sum method', () => {
        test('adds 1 + 2 to equal 3', () => {
            expect(calculator.add(1,2)).toBe(3);
        });
        test(' -5 + 4 is equal -1', () => {
            expect(calculator.add(-5,4)).toBe(-1);
        });

        test(' -5 + (-4) is equal -9', () => {
            expect(calculator.add(-5,-4)).toBe(-9);
        });

    });
    describe('subtract method', () => {
        test(' 2 - 1 is equal 1', () => {
            expect(calculator.subtract(2,1)).toBe(1);
        });
        test(' 8 - (-4) is equal 12', () => {
            expect(calculator.subtract(8,-4)).toBe(12);
        });
        test(' -8 - (-4) is equal 12', () => {
            expect(calculator.subtract(-8,-4)).toBe(-4);
        });


    });
    describe('divide method', () => {
        test(' 2/2 is equal 1', () => {
            expect(calculator.divide(2,2)).toBe(1);
        });

        test('error: division by zero', () => {
            expect(() => calculator.divide(2,0)).toThrow('Division by zero');
        });
        test('error: division by zero', () => {
            expect(() => calculator.divide(0,0)).toThrow('zero / zero is equal to infinite');
        });

    });
    describe('multiply method', () => {
        test(' 3 * 3 is equal 9', () => {
            expect(calculator.multiply(3,3)).toBe(9);
        });
        test(' 5 * 89 is equal 445', () => {
            expect(calculator.multiply(5,89)).toBe(445);
        });
        test(' 5 * 89 is greater than 300', () => {
            expect(calculator.multiply(5,89)).toBeGreaterThan(300);
        });

    });
});