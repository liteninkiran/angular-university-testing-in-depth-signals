import { describe, it, expect } from 'vitest';
import { calculator } from './calculator';

const describeIf = describe.skipIf(true);

const fundamentalsTests = () => {
  it.only('should add two numbers', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it.skip('should add two numbers v2', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('should add two numbers v3', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });
};

describeIf('Vitest Fundamentals', fundamentalsTests);
