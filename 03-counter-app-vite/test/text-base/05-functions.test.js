import { getUser, getActiveUser } from '../../src/test-base/05-functions';

describe('Tests 05-template-string', () => {
    test('getUser should return an object { \'uid\': \'1234mnE32\', \'name\': \'Mike\', \'surname\': \'García\' }', () => {
        const userTest = {
            'uid': '1234mnE32',
            'name': 'Mike',
            'surname': 'García',
        };

        const user = getUser();

        expect(userTest).toStrictEqual(user);
    });

    test('getActiveUser should return an object { \'uid\': \'1234mnE32\', \'name\': \'Mike\' }', () => {
        const name = 'Mike';

        const userTest = {
            'uid': '1234mnE32',
            'name': name,
        };

        const user = getActiveUser(name);

        expect(userTest).toStrictEqual(user);
    });
});