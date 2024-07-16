import { returnArray } from '../../src/test-base/07-destructuring-arr';

describe('Tests 07-destructuring-arr', () => {
    test('Should return a string and a number', () => {
        const arrayTest = [
            'ABC',
            123
        ];

        const [ letters, numbers ] = returnArray();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    });
});