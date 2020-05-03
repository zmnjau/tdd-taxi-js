import taxiprice from '../taxiprice/index';
import loadFile from '../utils/loadFile';
import parseFile from '../utils/parseFile';

import main from '../index';

test('given_km_and_min_return_price', () => {
  expect(taxiprice(1, 0)).toBe(6);
  expect(taxiprice(3, 0)).toBe(7);
  expect(taxiprice(10, 0)).toBe(13);
  expect(taxiprice(2, 3)).toBe(7);
});

test('given_path_return_filetext', () => {
  expect(loadFile('testData.txt')).toMatch('公里');
});

test('given_path_return_err', () => {
  try {
    loadFile('testData_error.txt');
  } catch (e) {
    expect(e.toString()).toMatch('no such file or directory');
  }
});

test('given_file_return_price_string', () => {
  const testStr = '收费6元\n收费7元\n收费13元\n收费7元\n';
  expect(parseFile('testData.txt')).toBe(testStr);
  expect(main()).toBe(testStr);
});
