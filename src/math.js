/**
 * Mathematical utility module for dupond-live-demo.
 */

export function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('clamp requires number arguments');
  }
  if (!Number.isFinite(value) || !Number.isFinite(min) || !Number.isFinite(max)) {
    throw new TypeError('clamp arguments must be finite numbers');
  }
  if (min > max) {
    throw new RangeError('min cannot be greater than max');
  }
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculates the percentage of a given value.
 *
 * @param {number} value - The base value.
 * @param {number} percentage - The percentage to calculate.
 * @returns {number} The result of value × percentage ÷ 100.
 */
export function percentageOf(value, percentage) {
  if (typeof value !== 'number' || typeof percentage !== 'number') {
    throw new TypeError('percentageOf requires number arguments');
  }
  if (!Number.isFinite(value) || !Number.isFinite(percentage)) {
    throw new TypeError('percentageOf arguments must be finite numbers');
  }
  return (value * percentage) / 100;
}
