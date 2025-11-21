import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  describe('getCurrentYear', () => {
    test('Return the correct year', () => {
      const currentYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(currentYear);
    });
  });

  describe('getFooterCopy', () => {
    test('Return "Holberton School" when argument is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('Return "Holberton School main dashboard" when argument is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    test('Return the correct notification string', () => {
      const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
      expect(getLatestNotification()).toBe(expectedString);
    });
  });
});