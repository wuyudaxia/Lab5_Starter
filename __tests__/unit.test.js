// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('valid: (408) 555-1234', () => {
    expect(isPhoneNumber('(408) 555-1234')).toBe(true);
  });
  test('valid: 408-555-1234', () => {
    expect(isPhoneNumber('408-555-1234')).toBe(true);
  });
  test('invalid: not enough digits', () => {
    expect(isPhoneNumber('12345')).toBe(false);
  });
  test('invalid: letters instead of digits', () => {
    expect(isPhoneNumber('call-me-maybe')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid: simple school email', () => {
    expect(isEmail('student@ucsd.edu')).toBe(true);
  });
  test('valid: short domain TLD', () => {
    expect(isEmail('a@b.co')).toBe(true);
  });
  test('invalid: TLD too short (one letter)', () => {
    expect(isEmail('user@site.c')).toBe(false);
  });
  test('invalid: missing @', () => {
    expect(isEmail('notanemail.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid: letter first, min length', () => {
    expect(isStrongPassword('Abcd')).toBe(true);
  });
  test('valid: letters, digits, underscore', () => {
    expect(isStrongPassword('Z_test99')).toBe(true);
  });
  test('invalid: starts with digit', () => {
    expect(isStrongPassword('1abcd')).toBe(false);
  });
  test('invalid: too short', () => {
    expect(isStrongPassword('Ab2')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid: single-digit month and day', () => {
    expect(isDate('1/5/2024')).toBe(true);
  });
  test('valid: two-digit month and day', () => {
    expect(isDate('12/31/2020')).toBe(true);
  });
  test('invalid: wrong separators', () => {
    expect(isDate('12-31-2020')).toBe(false);
  });
  test('invalid: year not four digits', () => {
    expect(isDate('1/1/24')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid: 3 hex chars with hash', () => {
    expect(isHexColor('#0aF')).toBe(true);
  });
  test('valid: 6 hex chars without hash', () => {
    expect(isHexColor('a1B2c3')).toBe(true);
  });
  test('invalid: non-hex letter', () => {
    expect(isHexColor('#GGG')).toBe(false);
  });
  test('invalid: wrong length (4 hex)', () => {
    expect(isHexColor('#abcd')).toBe(false);
  });
});
