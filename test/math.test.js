import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/math.js';

describe('clamp baseline tests', () => {
  it('clamps values within range', () => {
    assert.equal(clamp(5, 0, 10), 5);
    assert.equal(clamp(-5, 0, 10), 0);
    assert.equal(clamp(15, 0, 10), 10);
  });

  it('throws on invalid argument types or non-finite numbers', () => {
    assert.throws(() => clamp('5', 0, 10), TypeError);
    assert.throws(() => clamp(5, '0', 10), TypeError);
    assert.throws(() => clamp(Infinity, 0, 10), TypeError);
    assert.throws(() => clamp(5, 0, NaN), TypeError);
  });

  it('throws on min > max', () => {
    assert.throws(() => clamp(5, 10, 0), RangeError);
  });
});
