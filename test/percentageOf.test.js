import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as mathModule from '../src/math.js';

const { clamp, percentageOf } = mathModule;

describe('percentageOf acceptance tests', () => {
  it('calculates percentageOf(200, 15) === 30', () => {
    assert.equal(typeof percentageOf, 'function', 'percentageOf must be exported');
    assert.equal(percentageOf(200, 15), 30);
  });

  it('handles zero values and zero percentages', () => {
    assert.equal(typeof percentageOf, 'function', 'percentageOf must be exported');
    assert.equal(percentageOf(0, 50), 0);
    assert.equal(percentageOf(100, 0), 0);
    assert.equal(percentageOf(0, 0), 0);
  });

  it('handles negative values', () => {
    assert.equal(typeof percentageOf, 'function', 'percentageOf must be exported');
    assert.equal(percentageOf(-200, 15), -30);
    assert.equal(percentageOf(200, -15), -30);
    assert.equal(percentageOf(-200, -15), 30);
  });

  it('handles decimal percentages using appropriate floating-point tolerance', () => {
    assert.equal(typeof percentageOf, 'function', 'percentageOf must be exported');
    const result1 = percentageOf(80, 12.5);
    assert.ok(Math.abs(result1 - 10) < 1e-9, `Expected 10 but got ${result1}`);

    const result2 = percentageOf(33.33, 10);
    assert.ok(Math.abs(result2 - 3.333) < 1e-9, `Expected 3.333 but got ${result2}`);
  });

  it('rejects strings, null, NaN, and positive/negative Infinity with TypeError', () => {
    assert.equal(typeof percentageOf, 'function', 'percentageOf must be exported');
    // Non-number arguments
    assert.throws(() => percentageOf('200', 15), TypeError);
    assert.throws(() => percentageOf(200, '15'), TypeError);
    assert.throws(() => percentageOf(null, 15), TypeError);
    assert.throws(() => percentageOf(200, null), TypeError);
    assert.throws(() => percentageOf(undefined, 15), TypeError);
    assert.throws(() => percentageOf(200, undefined), TypeError);
    assert.throws(() => percentageOf({}, 15), TypeError);
    assert.throws(() => percentageOf(200, {}), TypeError);

    // Non-finite numbers
    assert.throws(() => percentageOf(NaN, 15), TypeError);
    assert.throws(() => percentageOf(200, NaN), TypeError);
    assert.throws(() => percentageOf(Infinity, 15), TypeError);
    assert.throws(() => percentageOf(200, Infinity), TypeError);
    assert.throws(() => percentageOf(-Infinity, 15), TypeError);
    assert.throws(() => percentageOf(200, -Infinity), TypeError);
  });

  it('preserves existing functionality (clamp remains unchanged)', () => {
    assert.equal(typeof clamp, 'function', 'clamp must still be exported');
    assert.equal(clamp(5, 0, 10), 5);
    assert.equal(clamp(-5, 0, 10), 0);
    assert.equal(clamp(15, 0, 10), 10);
    assert.throws(() => clamp('5', 0, 10), TypeError);
  });
});
