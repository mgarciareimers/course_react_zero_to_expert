import { getHeroeById, getHeroesByOwner } from '../../src/test-base/08-imp-exp';

describe('Tests 08-imp-exp', () => {
    test('getHeroeById should return a hero by id', () => {
        const id = 2;

        const testHero = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        };

        const hero = getHeroeById(id);

        expect(hero).toEqual(testHero);
    });

    test('getHeroeById should return undefined if not exists', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toEqual(undefined);
    });

    test('getOwnerById should return an array of the 3 heroes of DC', () => {
        const owner = 'DC';

        const testHeroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toEqual(testHeroes.length);
        expect(heroes).toEqual(testHeroes);
    });

    test('getOwnerById should return an array of the 2 heroes of Marvel', () => {
        const owner = 'Marvel';

        const testHeroes = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' },
        ];

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toEqual(testHeroes.length);
        expect(heroes).toEqual(testHeroes);
    });
});