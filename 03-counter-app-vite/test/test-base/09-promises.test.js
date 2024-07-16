import { getHeroesByIdAsync } from '../../src/test-base/09-promises';

describe('Tests 09-promises', () => {
    test('getHeroesByIdAsync should return a hero by id', async () => {
        const id = 2;
        const testHero = { id: 2, name: 'Spiderman', owner: 'Marvel' };

        const result = await getHeroesByIdAsync(id);

        expect(result.data.hero).toEqual(testHero);
    });

    test('getHeroesByIdAsync should return error if not exists', async () => {
        const id = 100;

        try {
            const result = await getHeroesByIdAsync(id);    
        } catch(e) {
            expect(e.error).toBe('Hero not found');
        }

    });
});