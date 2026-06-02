import { describe, it, expect, vi, Mock } from 'vitest';
import { calculator } from './calculator';

const itShouldAddTwoNumbers = () => {
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
};

const itShowsHowSpiesWork = () => {
  const spy = vi.spyOn(calculator, 'add');
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
  expect(spy).toHaveBeenCalledOnce();
  expect(spy).toHaveBeenCalledWith(2, 3);
};

const fundamentalsTests = () => {
  it.skip('should add two numbers', itShouldAddTwoNumbers);
  it('shows how spies work', itShowsHowSpiesWork);
};

describe('Vitest Fundamentals', fundamentalsTests);
