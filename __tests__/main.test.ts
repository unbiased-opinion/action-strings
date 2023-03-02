import { expect } from '@jest/globals'
import { actionRun } from './utils/helpers';
import { toLower } from '../src/methods/toLower';

describe(`methods`, () => {
  const value = 'AHh, hELlO ThERE!';
  const expectedValue = 'ahh, hello there!';
  const method = 'toLower';

  describe(method, () => {
    it(`transforms the string`, () => {
      expect(toLower(value)).toBe(expectedValue);
    });

    it(`${method} runs`, () => {
      expect(actionRun(method, value)).toContain(expectedValue);
    })
  });
});
