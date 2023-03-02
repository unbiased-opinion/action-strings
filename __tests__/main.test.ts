import { expect } from '@jest/globals'
import { toLower } from '../src/methods/toLower';

describe(`methods`, () => {
    describe(`toLower`, () => {
        const value = 'AHh, hELlO ThERE!';
        const expectedValue = 'ahh, hello there!';

        it(`transforms the string`, () => {
            expect(toLower(value)).toBe(expectedValue);
        });
    });
});
