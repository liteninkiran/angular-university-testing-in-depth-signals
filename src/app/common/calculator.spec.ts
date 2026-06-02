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

const itShowsHowMockResetWorksForSpies = () => {
  // Create spy/mock
  const spy = vi.spyOn(calculator, 'add').mockReturnValue(10);

  // Call method 1st time
  const result = calculator.add(2, 3);
  expect(result).toBe(10);
  expect(spy).toHaveBeenCalledOnce();

  // Reset
  spy.mockReset();

  // Call method 2nd time - mock is gone and original function is called
  const result2 = calculator.add(2, 3);
  expect(result2).toBe(5);
  expect(spy).toHaveBeenCalledOnce();
};

const itShowsHowMockResetWorksForPureMocks = () => {
  // Create pure mock
  const addMock = vi.fn().mockReturnValue(10);

  // Call method 1st time
  const result = addMock(5, 5);
  expect(result).toBe(10);
  expect(addMock).toHaveBeenCalledOnce();
  expect(addMock).toHaveBeenCalledWith(5, 5);

  // Reset
  addMock.mockReset();

  // Call method 2nd time - need to call mockReturnValue() again
  const result2 = addMock(5, 5);
  expect(result2).toBe(undefined);
  expect(addMock).toHaveBeenCalledOnce();
};

const fundamentalsTests = () => {
  it.skip('should add two numbers', itShouldAddTwoNumbers);
  it.skip('shows how spies work', itShowsHowSpiesWork);
  it.skip('shows how mocking works', itShowsHowMockingWorks);
  it.skip('shows how a pure mock works', itShowsHowPureMocksWork);
  it.skip('shows how mock clearing works', itShowsHowMockClearingWorks);
  it('shows how mockReset() works for spies', itShowsHowMockResetWorksForSpies);
  it('shows how mockReset() works for pure mocks', itShowsHowMockResetWorksForPureMocks);
};

describe('Vitest Fundamentals', fundamentalsTests);
