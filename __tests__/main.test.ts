import { expect } from '@jest/globals'
import { toLower } from '../src/methods/toLower';
import { camelCase } from '../src/methods/camelCase';
import { capitalize } from '../src/methods/capitalize';
import { deburr } from '../src/methods/deburr';
import { kebabCase } from '../src/methods/kebabCase';

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

    describe(`deburr`, () => {
        it(`transforms the string`, () => {
            expect(deburr('déjà vu')).toBe('deja vu');
        });
    });

    describe(`kebabCase`, () => {
        it(`transforms the string`, () => {
            expect(kebabCase('Foo Bar')).toBe('foo-bar');
            expect(kebabCase('fooBar')).toBe('foo-bar');
            expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
        });
    });
});
