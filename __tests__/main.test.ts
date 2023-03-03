import { expect } from '@jest/globals'
import { camelCase } from 'lodash';
import { toLower } from '../src/methods/toLower';

describe(`methods`, () => {
    describe(`toLower`, () => {
        const value = 'AHh, hELlO ThERE!';
        const expectedValue = 'ahh, hello there!';

        it(`transforms the string`, () => {
            expect(toLower(value)).toBe(expectedValue);
        });
    });

    describe(`camelCase`, () => {
        it(`transforms the string`, () => {
            expect(camelCase('Foo Bar')).toBe('fooBar');
            expect(camelCase('--foo-bar--')).toBe('fooBar');
            expect(camelCase('__FOO_BAR__')).toBe('fooBar');
        });
    });
});
