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

const itShowsHowMockingWorks = () => {
  const spy = vi.spyOn(calculator, 'add').mockReturnValue(5);
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
  expect(spy).toHaveBeenCalledOnce();
  expect(spy).toHaveBeenCalledWith(2, 3);
  const result2 = calculator.add(5, 5);
  expect(result2).toBe(5);
};

const fundamentalsTests = () => {
  it('should add two numbers', itShouldAddTwoNumbers);
  it('shows how spies work', itShowsHowSpiesWork);
  it.only('shows how mocking works', itShowsHowMockingWorks);
};

describe('Vitest Fundamentals', fundamentalsTests);
