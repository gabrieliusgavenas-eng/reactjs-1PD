import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateGuess } from '../src/utils/evaluateGuess.js';

test('rejects empty, nonnumeric, fractional and out-of-range input', () => {
  for (const input of ['', '   ', 'abc', 'NaN', 'Infinity', '1.5', '1,5', '0', '-1', '101']) {
    assert.equal(evaluateGuess(input, 50).status, 'error', input);
  }
});

test('accepts both inclusive boundaries and surrounding whitespace', () => {
  assert.equal(evaluateGuess('1', 1).status, 'won');
  assert.equal(evaluateGuess('100', 100).status, 'won');
  assert.equal(evaluateGuess(' 50 ', 50).status, 'won');
});

test('gives the correct hint on either side of a fixed secret number', () => {
  assert.deepEqual(evaluateGuess('49', 50), { text: 'Bandyk didesnį', status: 'hint' });
  assert.deepEqual(evaluateGuess('51', 50), { text: 'Bandyk mažesnį', status: 'hint' });
  assert.deepEqual(evaluateGuess('50', 50), { text: 'Teisingai!', status: 'won' });
});
