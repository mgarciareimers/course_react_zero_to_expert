describe('Tests in DemoComponent', () => {
    test('This test should work!', () => {
        // 1. Initialization.
        const message1 = 'Hello World  ';
    
        // 2. Stimmulation.
        const message2 = message1.trim();
    
        // 3. Check how its expected behaviour.
        //expect(message1).toBe(message2);
        expect(message1).not.toBe(message2);
    });
});