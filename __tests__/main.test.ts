import { expect } from '@jest/globals'
import { lowerCase } from '../src/methods/lowerCase';
import { camelCase } from '../src/methods/camelCase';
import { capitalize } from '../src/methods/capitalize';
import { deburr } from '../src/methods/deburr';
import { kebabCase } from '../src/methods/kebabCase';
import { snakeCase } from '../src/methods/snakeCase';

describe(`methods`, () => {
    describe(`lowerCase`, () => {
        const value = 'AHh, hELlO ThERE!';
        const expectedValue = 'ahh, hello there!';

        it(`transforms the string`, () => {
            expect(lowerCase(value)).toBe(expectedValue);
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

    describe(`snakeCase`, () => {
        it(`transforms the string`, () => {
            expect(snakeCase('Foo Bar')).toBe('foo_bar');
            expect(snakeCase('fooBar')).toBe('foo_bar');
            expect(snakeCase('__FOO_BAR__')).toBe('foo_bar');
        });
    });
});
