import { greeting } from '../../src/test-base/02-template-string';

describe('Tests 02-template-string', () => {
    test('greeting should return "Hi, Mike García"', () => {
        const name = 'Mike García';

        const message = greeting(name);

        expect(message).toBe(`Hi, ${ name }`);
    });
});