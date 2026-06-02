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

const itShowsHowPureMocksWork = () => {
  const addMock = vi.fn().mockReturnValue(10);
  // const result = addMock(5, 5, 5);
  const result = addMock(5, 5);
  expect(result).toBe(10);
  expect(addMock).toHaveBeenCalledOnce();
  expect(addMock).toHaveBeenCalledWith(5, 5);
};

const itShowsHowMockClearingWorks = () => {
  const spy = vi.spyOn(calculator, 'add');
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
  expect(spy).toHaveBeenCalledOnce();
  spy.mockClear();
  const result2 = calculator.add(5, 5);
  expect(result2).toBe(10);
  expect(spy).toHaveBeenCalledOnce();
};

const fundamentalsTests = () => {
  it('should add two numbers', itShouldAddTwoNumbers);
  it('shows how spies work', itShowsHowSpiesWork);
  it('shows how mocking works', itShowsHowMockingWorks);
  it('shows how a pure mock works', itShowsHowPureMocksWork);
  it.only('shows how mock clearing works', itShowsHowMockClearingWorks);
};

describe('Vitest Fundamentals', fundamentalsTests);
