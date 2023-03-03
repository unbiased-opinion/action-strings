import { expect } from '@jest/globals'
import { toLower } from '../src/methods/toLower';
import { camelCase } from '../src/methods/camelCase';
import { capitalize } from '../src/methods/capitalize';

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

    describe(`capitalize`, () => {
        it(`transforms the string`, () => {
            expect(capitalize('foo bar')).toBe('Foo bar');
        });
    });
});
