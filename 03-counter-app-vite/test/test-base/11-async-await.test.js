import { getImage } from '../../src/test-base/11-async-await';

describe('Tests 11-async-await', () => {
    test('getImage should return an url', async () => {
        const url = await getImage();

        expect(url).not.toContain('https://')
    });

});